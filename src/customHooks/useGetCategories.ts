import { useEffect, useState } from 'react';

export const useGetCategories = () => {
  const [categories, setCategories] = useState<any>([]);

  const fetchCategories = async () => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/category/get`);
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, [categories]);

  return { categories, setCategories };
};
