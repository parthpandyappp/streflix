function Nav() {
  return (
    <nav>
      <h2 class="nav-title">
        <span>
          <img
            class="logo"
            src="https://img.icons8.com/ios/50/000000/retro-tv.png"
            alt="logo"
          />
        </span>
        /<span class="title-empha">Stre</span>Flix
      </h2>

      <div>
        <input
          type="search"
          name=""
          id="search-bar"
          class="search-bar"
          placeholder="Your search goes here"
        />
        <button class="btn btn-primary login-btn ml-2">Login</button>
      </div>
    </nav>
  );
}

export { Nav };
