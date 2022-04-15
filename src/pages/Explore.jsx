import { useState } from "react";
import { useCategories } from "../contexts";
import { useVideoData } from "../custom-hooks";
import { VideoCard, SideNav } from "../components";
import { filterByCategory } from "../helper-functions";

function Explore() {
  const videos = useVideoData();
  const { categories } = useCategories();
  const [category, setCategory] = useState("All");
  const data = filterByCategory(videos, category);

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
          <div className="categories">
            {categories &&
              categories.map((category) => {
                return (
                  <p
                    key={category._id}
                    className="category-badge"
                    onClick={() => setCategory(category.categoryName)}
                  >
                    {category.categoryName}
                  </p>
                );
              })}
          </div>
          <div className="video-container">
            {data.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Explore };
