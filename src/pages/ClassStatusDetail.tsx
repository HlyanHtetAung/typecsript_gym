import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { STYLES } from '../styles';
import { useAppSelector } from '../stores/hooks';

const ClassStatusDetail = () => {
  const { packageId, trainerId } = useParams();
  const [classStatus, setClassStauts] = useState<any[]>([]);
  const { userData }: any = useAppSelector((state) => state.currentUser);

  console.log('Userdata', userData);
  const fetchClassStatusDetail = () => {
    fetch(
      `${
        import.meta.env.VITE_HOST_URL
      }/classes/get/selected-class?package_id=${packageId}&trainer_id=${trainerId}`
    )
      .then((res) => res.json())
      .then((data) => setClassStauts(data.data));
  };
  console.log('classStatusDetail', classStatus);
  useEffect(() => {
    fetchClassStatusDetail();
  }, [packageId, trainerId]);

  const userCurrentPointOnCurrentPackge = () => {
    const points = userData?.currentPointsAry.find(
      (pack: any) => pack?.package_id.toString() === packageId
    )?.currentPoints;

    if (points) {
      return points;
    }
    return null;
  };

  const ary = [
    {
      date: 120320,
      booked_class: [],
    },
    {
      date: 120320,
      booked_class: [],
    },
  ];
  const bookClassHandle = (classId: any, dateDay: any, packId: any) => {
    console.log('classId', classId);
    console.log('userID', userData.id);
    fetch(
      `${import.meta.env.VITE_HOST_URL}/schedule/add?customer_id=${
        userData.id
      }&class_id=${classId}&date=${dateDay}`
    )
      .then((res) => res.json())
      .then((data) => console.log('datatatatat', data));
    fetch(
      `${import.meta.env.VITE_HOST_URL}/customer-package/update?customer_id=${
        userData.id
      }&package_id=${packId}&points=1&amount=200&usage_type=sell`
    )
      .then((res) => res.json())
      .then((data) => console.log('datatatatat', data));
  };

  const checkBookOrNotHandle = (
    dateDay: any,
    cls: any,
    classStatusDetail: any
  ) => {
    let book = false;
    const concatedAry: any = [];
    if (userData) {
      Object.values(userData.booked_classes).forEach((bk_class: any) =>
        bk_class.forEach((book_class: any) => concatedAry.push(book_class))
      );
    }

    concatedAry.find(
      (concAry: any) =>
        concAry.class_date === dateDay.split(' ')[0] &&
        concAry.class_id === cls.id
    )
      ? (book = true)
      : (book = false);

    return book;
  };

  return (
    <div className="bg-bgBlack min-h-screen py-[20px]">
      <div
        className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} `}
      >
        <div className="sticky top-[70px] z-40 bg-bgBlack py-[10px]">
          <div className="flex flex-wrap justify-center sm:justify-between items-center">
            <h2 className={`${STYLES.heading2}`}>
              {classStatus[0]?.classes[0].trainer_id.name}'s Class
            </h2>
            <div className="flex justify-between rounded-md cursor-pointer">
              <div className="flex items-center gap-[5px] rounded-md">
                <p className="text-[14px] font-normal bg-primary py-[3px] px-[10px] rounded-full">
                  {classStatus[0]?.classes[0].package_id.category_id.name}
                </p>
                <p className="text-[14px] font-normal bg-gray-700 py-[3px] px-[10px] rounded-full text-white">
                  {classStatus[0]?.classes[0].package_id.package_type}
                </p>
                <p className="text-[14px] bg-green-300 py-[3px] px-[10px] rounded-full text-black font-semibold">
                  Available Points {userCurrentPointOnCurrentPackge()}
                </p>
              </div>
            </div>
          </div>
          {/* <button className="w-full mt-[10px] py-[4px] bg-green-300 rounded-md text-black font-semibold hover:bg-green-400 duration-300 text-[15px]">
            Book Class
          </button> */}
        </div>
        {classStatus?.map((clsStatusDetail: any, index) => (
          <div
            className="bg-gray-400  rounded-md p-[15px] drop-shadow-lg my-[20px]"
            key={index}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-[16px] font-semibold text-black">
                Class Limit : {clsStatusDetail.classes[0].class_limit}
              </h2>
              <h2 className="text-[16px] font-semibold text-black">
                {clsStatusDetail['date day']}
              </h2>
            </div>
            <div className="mt-[15px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[15px]">
              {clsStatusDetail.classes.map((cls: any) => (
                <div
                  onClick={() =>
                    bookClassHandle(
                      cls.id,
                      clsStatusDetail['date day'],
                      classStatus[0].classes[0].package_id.id
                    )
                  }
                  key={cls.id}
                  className={`
                  ${
                    checkBookOrNotHandle(
                      clsStatusDetail['date day'],
                      cls,
                      clsStatusDetail
                    )
                      ? 'bg-green-800'
                      : 'bg-bgBlack'
                  }
                  px-[10px] py-[15px] rounded-md flex flex-col items-center gap-[10px] cursor-pointer`}
                >
                  <h3 className="text-center font-semibold text-white">
                    {cls.from_time} - {cls.to_time}
                  </h3>
                  <p className="text-gray-400">{cls.people}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassStatusDetail;
