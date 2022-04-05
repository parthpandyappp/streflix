import axios from "axios";
import { useEffect, useState } from "react";

function VideoData() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const getRequest = await axios.get("/api/videos");
    setData(getRequest.data.videos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

const useVideoData = () => VideoData();

export { useVideoData };
