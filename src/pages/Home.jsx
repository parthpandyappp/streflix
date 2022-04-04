function Home() {
  return (
    <main class="center-hv">
      <div class="container">
        <div>
          <h1 class="main-title">
            <span>
              <img
                class="logo"
                src="https://img.icons8.com/ios/50/000000/retro-tv.png"
                alt="logo"
              />
            </span>
            /<span class="title-empha">Stre</span>Flix
          </h1>
          <p class="main-slogan">//Stream at peace</p>
          <p>
            Unlimited Movies, TV shows and more. Stream videos at peace, at your
            convenience. Drag your couch and start watching!!
          </p>

          <button class="btn btn-primary">Explore Videos</button>
          <button class="btn btn-secondary ml-2">
            <a href="#category">Stream by Categories</a>
          </button>
        </div>
        <img
          class="landing-img"
          src="https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d5e304c8f10c501d7fd8a1d_meditating.svg"
          alt="landing-image"
        />
      </div>

      <div class="pg-section">
        <div class="section-title">
          <h1 class="category-title" id="category">
            Categories
          </h1>
        </div>
        <div class="category-container">
          <div class="category">
            <div class="categories-title">
              <h3>Education</h3>
            </div>
            <a href="./pages/markup/prod-list.html">
              <img
                class="category-img"
                src="https://i.ibb.co/K9Bx1SD/streflix-education.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="category">
            <div class="categories-title">
              <h3>Gaming</h3>
            </div>
            <a href="./pages/markup/prod-list.html">
              <img
                class="category-img"
                src="https://i.ibb.co/GVgTxDZ/streflix-gaming.jpg"
                alt=""
              />
            </a>
          </div>

          <div class="category">
            <div class="categories-title">
              <h3>Art</h3>
            </div>
            <a href="./pages/markup/prod-list.html">
              <img
                class="category-img"
                src="https://i.ibb.co/pKtQdQT/streflix-art.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Home };
