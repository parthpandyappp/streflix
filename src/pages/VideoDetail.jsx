import { SideNav } from "../components";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useVideoData } from "../custom-hooks";
import { Link, useParams } from "react-router-dom";
import { useGenericData, useAuth } from "../contexts";

import {
  addToWatchLater,
  addToLikes,
  removeFromLikes,
  postNewPlaylist,
  postVideoToPlaylist,
  notifyAddedToPlaylist,
  notifyRemoveLiked,
  notifyLiked,
  notifyWatchLater,
  notifyPlaylistCreated,
} from "../helper-functions";

function VideoDetail() {
  const { user } = useAuth();
  const { vid } = useParams();
  const videoData = useVideoData();
  const [videoObj, setObj] = useState(null);
  const [playListName, setPlayListName] = useState("");
  const { state, dispatch, boolFunc } = useGenericData();
  const [loadModal, setLoadModal] = useState("hide-modal");
  const [createNewPlayList, setCreateNewPlayList] = useState(false);

  const changeModalState = () =>
    loadModal === "" ? setLoadModal("hide-modal") : setLoadModal("");

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
      return state.Liked.find((item) => item._id === id);
    }
    return false;
  };

  return (
    <div className="main-container">
      <SideNav />
      <Toaster position="bottom-right" reverseOrder={false} />
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
                      onClick={() =>
                        removeFromLikes(
                          videoObj._id,
                          boolFunc,
                          notifyRemoveLiked
                        )
                      }
                      src="https://img.icons8.com/material-sharp/48/000000/thumb-up.png"
                      title="Like this video"
                      alt="like"
                    />
                  ) : (
                    <img
                      onClick={() =>
                        addToLikes(videoObj, boolFunc, notifyLiked)
                      }
                      src="https://img.icons8.com/material-outlined/48/000000/thumb-up.png"
                      title="Like this video"
                      alt="like"
                    />
                  )}

                  {user ? (
                    <img
                      onClick={() =>
                        addToWatchLater(videoObj, boolFunc, notifyWatchLater)
                      }
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
                    onClick={changeModalState}
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

      <div className={`playlist-modal ${loadModal}`}>
        <div className="playlist-content">
          <div className="playlist-modal-heading">
            <h2>Add to Playlist</h2>
            <img
              className="cancel-btn"
              onClick={changeModalState}
              src="https://img.icons8.com/ios/50/000000/cancel.png"
            />
          </div>
          <hr />
          <div>
            {state.playlist && state.playlist.length > 0
              ? state.playlist.map((playlist) => (
                  <div key={playlist._id} className="playlist-modal-content">
                    <label htmlFor="">
                      <input
                        type="checkbox"
                        onChange={() =>
                          postVideoToPlaylist(
                            playlist._id,
                            dispatch,
                            videoObj,
                            notifyAddedToPlaylist
                          )
                        }
                      />
                      {playlist.title}
                    </label>
                  </div>
                ))
              : ""}
          </div>
          <div className="center-hv mt-05">
            {createNewPlayList ? (
              <form
                className="playlist-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  postNewPlaylist(
                    { title: playListName },
                    dispatch,
                    notifyPlaylistCreated
                  );
                  setCreateNewPlayList(false);
                  setPlayListName("");
                }}
              >
                <input
                  className="playlist-inp"
                  type="text"
                  placeholder="Playlist Name"
                  value={playListName}
                  onChange={(e) => setPlayListName(e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
            ) : (
              <div className="center-hv mt-05">
                <button
                  onClick={() => setCreateNewPlayList(!createNewPlayList)}
                >
                  Create New Playlist
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { VideoDetail };
