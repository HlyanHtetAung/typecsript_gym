import { useEffect, useState } from 'react';

export const useGetPlans = () => {
  const [plans, setPlans] = useState<any>([]);

  const fetchPackages = async () => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/plan/get`);
    const data = await res.json();
    setPlans(data);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return { plans, setPlans };
};
