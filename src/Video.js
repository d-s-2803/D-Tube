import React from "react";
import { Link } from "@reach/router";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

const Video = (props) => {
  const timeAgo = new TimeAgo("en-us");
  const dateAdded = new Date(props.dateAdded);
  return (
    <Link to={`/watch/${props.id}`} className="video-container">
      <div className="video-image">
        <img src={props.thumbnail.url} alt={props.title} />
      </div>
      <div className="video-info">
        <h3>{props.title}</h3>
        <p>{timeAgo.format(dateAdded)}</p>
        <h4>{props.channel}</h4>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default Video;
