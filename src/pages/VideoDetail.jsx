import { useParams } from "react-router-dom";
import { useVideoData } from "../custom-hooks";
import { useEffect, useState } from "react";

function VideoDetail() {
  const { vid } = useParams();
  const videoData = useVideoData();
  const [videoObj, setObj] = useState(null);

  const checkAvailability = () => {
    const videoObj = videoData.find((video) => video._id === vid);
    setObj(videoObj);
  };

  useEffect(() => {
    checkAvailability();
  }, [videoData]);

  return (
    <div className="main-container">
      <div className="side-nav">
        <p>Home</p>
        <p>Explore</p>
        <p>Playlist</p>
        <p>Watch Later</p>
        <p>Liked Videos</p>
        <p>Watch History</p>
      </div>
      <div className="main-content">
        <div className="center-hv">
          <h1 className="main-title">
            <span>
              <img
                className="logo"
                src="https://img.icons8.com/ios/50/000000/retro-tv.png"
                alt="logo"
              />
            </span>
            /<span className="title-empha">Stre</span>Flix
          </h1>
          <div className="video-container">
            {videoObj && (
              <div className="detail-preview">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoObj.videoURL}`}
                ></iframe>
                <hr />
                <div className="user-opts">
                  <img
                    src="https://img.icons8.com/material-outlined/48/000000/thumb-up.png"
                    title="Like this video"
                  />
                  <img
                    src="https://img.icons8.com/material-outlined/48/000000/thumbs-down.png"
                    title="Dislike this video"
                  />
                  <img
                    src="https://img.icons8.com/windows/48/000000/clock--v1.png"
                    title="Add to Watch Later"
                  />
                  <img
                    src="https://img.icons8.com/ios-glyphs/48/000000/lounge-music-playlist.png"
                    title="Add to Playlist"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { VideoDetail };
