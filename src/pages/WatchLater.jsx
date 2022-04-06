import { useGenericData } from "../contexts";
import { VideoCard, SideNav } from "../components";

function WatchLater() {
  const { state } = useGenericData();
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
          {state.watchLater.length > 0 ? (
            <div className="video-container">
              {state.watchLater.map((video) => {
                Object.assign(video, { from: "watchlater" });
                return <VideoCard key={video._id} video={video} />;
              })}
            </div>
          ) : (
            <div>
              <img
                className="empty-data"
                src="https://i.ibb.co/98YTd6W/watch-later.png"
                alt="watch-later"
                border="0"
              ></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { WatchLater };
