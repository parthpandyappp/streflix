import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const categoryContext = createContext([]);

function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const res = await axios.get("/api/categories");
    setCategories(res.data.categories);
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <categoryContext.Provider value={{ categories }}>
      {children}
    </categoryContext.Provider>
  );
}

const useCategories = () => useContext(categoryContext);

export { CategoryProvider, useCategories };
