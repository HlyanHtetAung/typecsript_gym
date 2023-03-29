import { useEffect, useState } from 'react';

export const useGetPackages = () => {
  const [packages, setPackages] = useState<any>([]);

  const fetchPackages = async () => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/package/get`);
    const data = await res.json();
    setPackages(data);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return { packages, setPackages };
};
