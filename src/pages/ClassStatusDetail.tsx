import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { STYLES } from '../styles';

const ClassStatusDetail = () => {
  const { packageId, trainerId } = useParams();
  const [classStatus, setClassStauts] = useState<any[]>([]);
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
      <div className="flex justify-between items-center my-[20px]">
        <h2 className="text-[20px] font-bold">
          {classStatus[0]?.classes[0].trainer_id.name}
        </h2>
        <div className="flex justify-between  rounded-md cursor-pointer">
          <div className="flex items-center gap-[5px] rounded-md">
            <p className="text-[14px] font-normal bg-primary py-[3px] px-[10px] rounded-full">
              {classStatus[0]?.classes[0].package_id.category_id.name}
            </p>
            <p className="text-[14px] font-normal bg-gray-700 py-[3px] px-[10px] rounded-full text-white">
              {classStatus[0]?.classes[0].package_id.package_type}
            </p>
          </div>
        </div>
      </div>
      {classStatus?.map((clsStatusDetail: any, index) => (
        <div
          className="bg-gray-200 rounded-md p-[10px] drop-shadow-lg my-[20px]"
          key={index}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-[16px] font-semibold">
              Class Limit : {clsStatusDetail.classes[0].class_limit}
            </h2>
            <h2 className="text-[16px] font-semibold">
              {clsStatusDetail['date day']}
            </h2>
          </div>
          <div className="mt-[10px]">
            {clsStatusDetail.classes.map((cls: any) => (
              <div key={cls.id}>
                <h3>
                  {cls.from_time} - {cls.to_time}
                </h3>
                <p>{cls.people}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassStatusDetail;
