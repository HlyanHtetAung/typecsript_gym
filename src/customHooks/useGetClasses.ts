import { useEffect, useState } from 'react';

export const useGetClasses = () => {
  const [classes, setClasses] = useState<any>([]);

  const fetchPackages = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_HOST_URL}/classes/get/unfilter`
    );
    const data = await res.json();
    setClasses(data);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return { classes, setClasses };
};
