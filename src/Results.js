import React from "react";
import Video from "./Video";

const Results = ({ videos, loading }) => {
  return (
    <div className="search-result">
      {loading ? (
        <div className="loader"></div>
      ) : (
        videos.map((video) => {
          return (
            <Video
              key={video.id.videoId}
              title={video.snippet.title}
              dateAdded={video.snippet.publishedAt}
              thumbnail={video.snippet.thumbnails.medium}
              channel={video.snippet.channelTitle}
              description={video.snippet.description}
              id={video.id.videoId}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
