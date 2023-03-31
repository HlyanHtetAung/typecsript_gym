import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { STYLES } from '../styles';

const ClassStatusDetail = () => {
  const { packageId, trainerId } = useParams();
  const [classStatus, setClassStauts] = useState([]);
  console.log(classStatus);
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_HOST_URL
      }/classes/get/selected-class?package_id=${packageId}&trainer_id=${trainerId}`
    )
      .then((res) => res.json())
      .then((data) => setClassStauts(data.data));
  }, []);

  return (
    <div
      className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX}`}
    >
      {classStatus?.map((clsStatusDetail) => (
        <div className="bg-gray-200 rounded-md p-[10px] drop-shadow-lg my-[20px]">
          <h2>{clsStatusDetail['date day']}</h2>
          <div className="flex justify-between  rounded-md cursor-pointer">
            <h2 className="text-[20px] font-bold">John Cena</h2>
            <div className="flex items-center gap-[5px] rounded-md">
              <p className="text-[14px] font-normal bg-primary py-[3px] px-[10px] rounded-full">
                Yoga
              </p>
              <p className="text-[14px] font-normal bg-gray-700 py-[3px] px-[10px] rounded-full text-white">
                Individual
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassStatusDetail;
