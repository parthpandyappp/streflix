function VideoCard({ video }) {
  return (
    <div className="card-main">
      <img className="img-preview" src={video.imgPreview} alt="vid" />

      <div className="vid-info">
        <h3 className="vid-title">{video.title}</h3>
        <p className="vid-desc">{video.description}</p>
        <p className="vid-desc">Created by: {video.creator}</p>
      </div>
      <div className="utils">
        <hr />
        <div className="utils-opts">
          <button className="btn btn-primary btn-util">Watch Later</button>
          <button className="btn btn-primary btn-util">Add to Playlist</button>
        </div>
      </div>
    </div>
  );
}

export { VideoCard };
