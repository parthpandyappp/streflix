import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import {
  removeFromWatchLater,
  addToWatchHistory,
  removeFromLikes,
  removeFromPlaylist,
  notifyRemoveLiked,
  notifyRemoveFromPlaylist,
  notifyRemoveWatchLater,
} from "../helper-functions";

import { useGenericData } from "../contexts";

function VideoCard({ video, pid }) {
  const { boolFunc } = useGenericData();

  return (
    <div className="card-main">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Link
        to={`/video/${video._id}`}
        onClick={() => addToWatchHistory(video, boolFunc)}
      >
        <img className="img-preview" src={video.imgPreview} alt="vid" />

        <div className="vid-info">
          <h3 className="vid-title">{video.title}</h3>
          <p className="vid-desc">{video.description}</p>
          <p className="vid-desc">Created by: {video.creator}</p>
        </div>
      </Link>

      {/* Shows Remove from Watch Later button */}
      {video.from === "watchlater" ? (
        <div className="utils-opts">
          <button
            className="btn btn-primary"
            onClick={() =>
              removeFromWatchLater(video._id, boolFunc, notifyRemoveWatchLater)
            }
          >
            Remove from Watch Later
          </button>
        </div>
      ) : null}

      {/* Shows Remove from Liked Videos button */}
      {video.from === "liked" ? (
        <div className="utils-opts">
          <button
            className="btn btn-primary"
            onClick={() =>
              removeFromLikes(video._id, boolFunc, notifyRemoveLiked)
            }
          >
            Remove from Liked Videos
          </button>
        </div>
      ) : null}

      {/* Shows Remove from Playlist button */}

      {video.from === "playlist" ? (
        <div className="utils-opts">
          <button
            className="btn btn-primary"
            onClick={() =>
              removeFromPlaylist(
                video._id,
                pid,
                boolFunc,
                notifyRemoveFromPlaylist
              )
            }
          >
            Remove from Playlist
          </button>
        </div>
      ) : null}
    </div>
  );
}

export { VideoCard };
