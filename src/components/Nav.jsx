import { Link } from "react-router-dom";
import { useAuth } from "../contexts";
import { logoutHandler } from "../helper-functions";

function Nav() {
  const { user, boolFunc } = useAuth();

  return (
    <nav>
      <Link to="/">
        <h2 className="nav-title">
          <span>
            <img
              className="logo"
              src="https://img.icons8.com/ios/50/000000/retro-tv.png"
              alt="logo"
            />
          </span>
          /<span className="title-empha">Stre</span>Flix
        </h2>
      </Link>

      <div className="nav-pills">
        <div>{user ? <h4>Hello {user.firstName}👋</h4> : ""}</div>
        <div className="ml-2">
          <input
            type="search"
            name=""
            id="search-bar"
            className="search-bar"
            placeholder="Your search goes here"
          />
          {user ? (
            <button
              className="btn btn-primary login-btn ml-2"
              onClick={() => logoutHandler(boolFunc)}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary login-btn ml-2">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export { Nav };
