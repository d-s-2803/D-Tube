import React from "react";
import axios from "axios";
import * as AppContant from "./AppConstant";
import FormatNumber from "./FormatNumber";
import ErrorBoundary from "./ErrorBoundary";
import ColorContext from "./ColorContext";
import Modal from "./Modal";

class WatchArea extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, showModal: false };
  }

  componentDidMount() {
    axios
      .get(`${AppContant.VIDEO_URL}&id=${this.props.id}`)
      .then((res) => {
        const item = res.data.items[0];
        this.setState({
          title: item.snippet.title,
          views: item.statistics.viewCount,
          description: item.snippet.description,
          channel: item.snippet.channelTitle,
          like: item.statistics.likeCount,
          loading: false,
          url: item.id,
        });
      })
      .catch((err) => this.setState({ error: err }));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  goToYoutube = () =>
    window.open(`https://www.youtube.com/watch?v=${this.state.url}`);
  // navigate(`https://www.youtube.com/watch?v=${this.state.url}`)

  render() {
    if (this.state.loading) {
      return <h1 className="loader"></h1>;
    }

    const {
      title,
      views,
      description,
      channel,
      like,
      url,
      showModal,
    } = this.state;

    return (
      <div className="watch-area">
        <div>
          <div className="player">
            <iframe
              title={title}
              width="1050"
              height="450"
              src={`//www.youtube.com/embed/${url}`}
              frameBorder="0"
              allow=" autoplay encrypted-media; "
              allowFullScreen
            ></iframe>
          </div>
          <h1>{title}</h1>
          <div className="video-stats">
            <div>
              <FormatNumber number={views} /> Views
            </div>
            <div>
              <FormatNumber number={like} /> Likes
            </div>
          </div>
          <div className="channel-name">{channel} Channel</div>
          <ColorContext.Consumer>
            {([themeColor]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: themeColor }}
              >
                Watch on Youtube
              </button>
            )}
          </ColorContext.Consumer>
          <p>{description}</p>

          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to watch this video on YouTube ?</h1>
                <div className="buttons">
                  <button className="btn-green" onClick={this.goToYoutube}>
                    Yes
                  </button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function WatchAreaWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <WatchArea {...props} />
    </ErrorBoundary>
  );
}
