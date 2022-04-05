import { Link } from "react-router-dom";

function VideoCard({ video }) {
  const logging = () => {
    console.log("logs it");
  };
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

// utils
{
  /* <div className="utils">
  <hr />
  <div className="utils-opts">
    <button className="btn btn-primary btn-util" onClick={logging}>
      Watch Later
    </button>
    <button className="btn btn-primary btn-util">Add to Playlist</button>
  </div>
</div>; */
}
