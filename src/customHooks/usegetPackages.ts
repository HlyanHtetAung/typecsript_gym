import { useEffect, useState } from "react";

export const useGetPackages = () => {
  const [packages, setPackages] = useState<any>([]);

  const fetchPackages = async () => {
    const res = await fetch("http://localhost:5000/package/get");
    const data = await res.json();
    setPackages(data);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return { packages, setPackages };
};
