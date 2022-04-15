import { useGenericData } from "../contexts";
import { useParams } from "react-router-dom";
import { SideNav, VideoCard } from "../components";

function PlaylistDetail() {
  const { pid } = useParams();
  const { state } = useGenericData();

  const playlistObj = state.playlist.find((playlist) => playlist._id === pid);

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
          {playlistObj.videos.length > 0 ? (
            <div className="video-container">
              {playlistObj.videos.map((video) => {
                Object.assign(video, { from: "playlist" });
                return (
                  <VideoCard
                    key={video._id}
                    video={video}
                    pid={playlistObj._id}
                  />
                );
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

export { PlaylistDetail };
