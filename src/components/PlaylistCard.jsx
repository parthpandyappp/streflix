import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useGenericData } from "../contexts";
import { removePlaylist, notifyRemovePlaylist } from "../helper-functions";

function PlaylistCard({ playlist }) {
  const { dispatch } = useGenericData();
  return (
    <div className="playlist-main">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Link to={`/playlist/${playlist._id}`}>
        {playlist && playlist.videos.length > 0 ? (
          <img
            className="img-preview"
            src={playlist.videos[0].imgPreview}
            alt="vid"
          />
        ) : (
          <img
            className="img-preview"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3eRH2gPQJJBCOFAF9dwUOmkKFF2aeB2-sg&usqp=CAU"
            alt="default-img-preview"
            border="0"
          />
        )}
        <div className="playlist-cover">
          <p className="playlist-vids">{playlist.videos.length}</p>
          <img
            className="play-icon"
            src="https://img.icons8.com/plasticine/100/000000/video-playlist.png"
            alt="playlist-icon"
          ></img>
        </div>
      </Link>
      <div className="playlistTitle-container">
        <h3 className="playlist-title">
          {playlist.title}{" "}
          <img
            onClick={() =>
              removePlaylist(playlist._id, dispatch, notifyRemovePlaylist)
            }
            className="lg-icon"
            src="https://img.icons8.com/external-creatype-filed-outline-colourcreatype/64/000000/external-bin-user-interface-creatype-filed-outline-colourcreatype.png"
            alt="bin-icon"
          ></img>
        </h3>
      </div>
    </div>
  );
}

export { PlaylistCard };
