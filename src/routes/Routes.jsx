import { Routes, Route } from "react-router-dom";

// Pages import
import Mockman from "mockman-js";
import {
  Home,
  Login,
  Signup,
  Explore,
  Playlist,
  LikedVids,
  WatchLater,
  VidHistory,
  VideoDetail,
  PlaylistDetail,
} from "../pages";

function Endpoints() {
  return (
    <Routes>
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/history" element={<VidHistory />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/video/:vid" element={<VideoDetail />} />
      <Route path="/playlist/:pid" element={<PlaylistDetail />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/liked" element={<LikedVids />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export { Endpoints as Routes };
