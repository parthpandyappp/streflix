import { Link } from "react-router-dom";
import {
  removeFromWatchLater,
  addToWatchHistory,
  removeFromLikes,
} from "../helper-functions";
import { useGenericData } from "../contexts";

function VideoCard({ video }) {
  const { boolFunc } = useGenericData();

  return (
    <div className="card-main">
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
            onClick={() => removeFromWatchLater(video._id, boolFunc)}
          >
            Remove from Watch Later
          </button>
        </div>
      ) : (
        ""
      )}

      {/* Shows Remove from Liked Videos button */}
      {video.from === "liked" ? (
        <div className="utils-opts">
          <button
            className="btn btn-primary"
            onClick={() => removeFromLikes(video._id, boolFunc)}
          >
            Remove from Liked Videos
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export { VideoCard };
