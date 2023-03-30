import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ClassStatusDetail = () => {
  const { packageId, trainerId } = useParams();
  const ary1 = [
    { date: '20203', classes: [{}] },
    { date: '20203', classes: [{}] },
  ];

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_HOST_URL
      }/classes/get/selected-class?package_id=${packageId}&trainer_id=${trainerId}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>ClassStatusDetail</div>;
};

export default ClassStatusDetail;
