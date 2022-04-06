import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="side-nav">
      <Link to="/" className="sideNav-opt">
        <p>Home</p>
      </Link>
      <Link to="/explore" className="sideNav-opt">
        <p>Explore</p>
      </Link>
      <Link to="/playlist" className="sideNav-opt">
        <p>Playlist</p>
      </Link>
      <Link to="/watchlater" className="sideNav-opt">
        <p>Watch Later</p>
      </Link>
      <Link to="/liked" className="sideNav-opt">
        <p>Liked Videos</p>
      </Link>
      <Link to="/history" className="sideNav-opt">
        <p>Watch History</p>
      </Link>
    </div>
  );
}

export { SideNav };
