import { useGenericData } from "../contexts";
import { PlaylistCard, SideNav } from "../components";

function Playlist() {
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
          {state.playlist.length > 0 ? (
            <div className="video-container">
              {state.playlist.map((playlist) => {
                return <PlaylistCard key={playlist._id} playlist={playlist} />;
              })}
            </div>
          ) : (
            <div>
              <img
                className="empty-data"
                src="https://i.ibb.co/hFpFFMW/undraw-Like-dislike-re-dwcj.png"
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

export { Playlist };
