import { useVideoData } from "../custom-hooks";
import { VideoCard } from "../components";

function Explore() {
  const videos = useVideoData();
  console.log(videos);
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
            {videos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Explore };
