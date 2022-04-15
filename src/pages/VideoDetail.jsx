import { SideNav } from "../components";
import { useEffect, useState } from "react";
import { useVideoData } from "../custom-hooks";
import { Link, useParams } from "react-router-dom";
import { useGenericData, useAuth } from "../contexts";

import {
  addToWatchLater,
  addToLikes,
  removeFromLikes,
} from "../helper-functions";

function VideoDetail() {
  const { user } = useAuth();
  const { vid } = useParams();
  const videoData = useVideoData();
  const [videoObj, setObj] = useState(null);
  const { state, boolFunc } = useGenericData();

  const checkAvailability = () => {
    const videoObj = videoData.find((video) => video._id === vid);
    setObj(videoObj);
  };

  useEffect(() => {
    checkAvailability();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoData]);

  const checkInLiked = (id) => {
    if (state.Liked.length > 0) {
      console.log("once");
      return state.Liked.find((item) => item._id === id);
    }
    return false;
  };

  return (
    <div className="main-container">
      <SideNav />
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
                  title={videoObj.title}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoObj.videoURL}`}
                ></iframe>
                <hr />
                <div className="user-opts">
                  {checkInLiked(videoObj._id) ? (
                    <img
                      onClick={() => removeFromLikes(videoObj._id, boolFunc)}
                      src="https://img.icons8.com/material-sharp/48/000000/thumb-up.png"
                      title="Like this video"
                      alt="like"
                    />
                  ) : (
                    <img
                      onClick={() => addToLikes(videoObj, boolFunc)}
                      src="https://img.icons8.com/material-outlined/48/000000/thumb-up.png"
                      title="Like this video"
                      alt="like"
                    />
                  )}

                  {user ? (
                    <img
                      onClick={() => addToWatchLater(videoObj, boolFunc)}
                      src="https://img.icons8.com/windows/48/000000/clock--v1.png"
                      title="Add to Watch Later"
                      alt="watch-later"
                    />
                  ) : (
                    <Link to="/login">
                      <img
                        src="https://img.icons8.com/windows/48/000000/clock--v1.png"
                        title="Add to Watch Later"
                        alt="watch-later"
                      />
                    </Link>
                  )}
                  <img
                    src="https://img.icons8.com/ios-glyphs/48/000000/lounge-music-playlist.png"
                    title="Add to Playlist"
                    alt="playlist"
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
