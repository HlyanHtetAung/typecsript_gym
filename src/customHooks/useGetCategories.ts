import { useEffect, useState } from "react";

export const useGetCategories = () => {
  const [categories, setCategories] = useState<any>([]);

  const fetchCategories = async () => {
    const res = await fetch("http://localhost:5000/category/get");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, setCategories };
};
