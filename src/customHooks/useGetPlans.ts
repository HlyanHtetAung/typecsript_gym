import { useEffect, useState } from 'react';

export const useGetPlans = () => {
  const [plans, setPlans] = useState<any>([]);

  const fetchPackages = async () => {
    const res = await fetch('http://localhost:5000/plan/get');
    const data = await res.json();
    setPlans(data);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return { plans, setPlans };
};
