import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video._id}`}>
      <div className="card-main">
        <img className="img-preview" src={video.imgPreview} alt="vid" />

        <div className="vid-info">
          <h3 className="vid-title">{video.title}</h3>
          <p className="vid-desc">{video.description}</p>
          <p className="vid-desc">Created by: {video.creator}</p>
        </div>
      </div>
    </Link>
  );
}

export { VideoCard };
