import { Link } from "react-router-dom";

function Nav() {
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

      <div>
        <input
          type="search"
          name=""
          id="search-bar"
          className="search-bar"
          placeholder="Your search goes here"
        />
        <button className="btn btn-primary login-btn ml-2">Login</button>
      </div>
    </nav>
  );
}

export { Nav };
