import { useEffect, useState } from 'react';

export const useGetTrainers = () => {
  const [trainers, setTrainers] = useState<any>([]);

  const fetchTrainers = async () => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/trainer/get`);
    const data = await res.json();
    setTrainers(data);
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  return { trainers, setTrainers };
};
