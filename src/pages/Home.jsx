import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="center-hv h-90">
      <div className="container">
        <div>
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
          <p className="main-slogan">{"//"}Stream at peace</p>
          <p>
            Unlimited Movies, TV shows and more. Stream videos at peace, at your
            convenience. Drag your couch and start watching!!
          </p>

          <Link to="/explore">
            <button className="btn btn-primary">Explore Videos</button>
          </Link>
          <button className="btn btn-secondary ml-2">
            <a href="#category">Stream by Categories</a>
          </button>
        </div>
        <img
          className="landing-img"
          src="https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d5e304c8f10c501d7fd8a1d_meditating.svg"
          alt="landing"
        />
      </div>

      <div className="pg-section">
        <div className="section-title">
          <h1 className="category-title" id="category">
            Categories
          </h1>
        </div>
        <div className="category-container">
          <div className="category">
            <div className="categories-title">
              <h3>Education</h3>
            </div>
            <Link to="/explore">
              <img
                className="category-img"
                src="https://i.ibb.co/K9Bx1SD/streflix-education.jpg"
                alt="cateogory-education"
              />
            </Link>
          </div>

          <div className="category">
            <div className="categories-title">
              <h3>Gaming</h3>
            </div>
            <Link to="/explore">
              <img
                className="category-img"
                src="https://i.ibb.co/GVgTxDZ/streflix-gaming.jpg"
                alt="cateogory-gaming"
              />
            </Link>
          </div>

          <div className="category">
            <div className="categories-title">
              <h3>Art</h3>
            </div>
            <Link to="/explore">
              <img
                className="category-img"
                src="https://i.ibb.co/pKtQdQT/streflix-art.jpg"
                alt="cateogory-art"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Home };
