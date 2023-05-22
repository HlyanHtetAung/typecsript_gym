import { useEffect, useState } from 'react';
import { STYLES } from '../styles';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import {
  addPointOnUnBook,
  removeBookedClassFromUserAccount,
} from '../stores/userSlice';

const ClientProfile = () => {
  const { userData }: any = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();
  const [userClassHistory, setUserClassHistory] = useState<any>();
  console.log('profile userdata', userData);
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_HOST_URL
      }/schedule/customer-history/get?customer_id=${userData?.id}`
    )
      .then((res) => res.json())
      .then((data) => setUserClassHistory(data));
  }, []);

  const unBookClassHandle = (
    scheduleId: any,
    classId: any,
    dateDay: any,
    packageId: any
  ) => {
    fetch(
      `${
        import.meta.env.VITE_HOST_URL
      }/schedule/update?schedule_id=${scheduleId}`
    )
      .then((res) => res.json())
      .then((data) => {
        const copiedAry = [...userClassHistory.current];
        setUserClassHistory((prev: any) => ({
          past: prev.past,
          current: copiedAry.filter((cop: any) => cop.id !== scheduleId),
        }));
        dispatch(
          removeBookedClassFromUserAccount({
            id: classId,
            date: dateDay,
          })
        );
        dispatch(
          addPointOnUnBook({
            packageId: packageId.toString(),
          })
        );
      });
    fetch(
      `${import.meta.env.VITE_HOST_URL}/customer-package/update?customer_id=${
        userData.id
      }&package_id=${packageId}&points=1&amount=200&usage_type=cancel`
    ).then((res) => res.json());
  };

  if (!userData) {
    return null;
  }

  return (
    <div className="w-full bg-white">
      <div
        className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
      >
        <h2 className={`${STYLES.heading2OnBgWhite} my-[10px]`}>Windy</h2>
        <div>
          <h3 className="text-gray-500 text-[20px] font-semibold">
            Ongoing Class
          </h3>
          <div className="grid sm:grid-cols-2 gap-[20px] mt-[10px]">
            {userClassHistory?.current?.map((currentClass: any) => (
              <div
                key={currentClass.id}
                className="bg-gray-200 rounded-md p-[10px] drop-shadow-lg"
              >
                <div className="flex justify-between rounded-md cursor-pointer">
                  <h2 className="text-[20px] font-bold flex-1">
                    {currentClass.class_id.class_name}
                  </h2>
                  <h3 className="text-[17px] font-semibold text-center bg-cyan-700 text-white rounded-md max_content mx-auto px-[10px] py-[3px]">
                    {currentClass.class_date}
                  </h3>
                </div>
                <h3 className="text-slate-500 text-[16px] font-semibold">
                  {currentClass.class_id.from_time} -{' '}
                  {currentClass.class_id.to_time} ({currentClass.status})
                </h3>
                <button
                  onClick={() => {
                    unBookClassHandle(
                      currentClass.id,
                      currentClass.class_id.id,
                      currentClass.class_date,
                      currentClass.class_id.package_id
                    );
                  }}
                  className="w-full mt-[10px] py-[4px] bg-red-400 rounded-md text-white font-semibold hover:bg-red-500 duration-300 text-[15px]"
                >
                  Unbook Class
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="my-[20px]">
          <h3 className="text-gray-500 text-[20px] font-semibold">
            Booked History
          </h3>
          <div className="grid sm:grid-cols-2 gap-[20px] mt-[10px]">
            {userClassHistory?.past?.map((pastClass: any) => (
              <div
                key={pastClass.id}
                className="bg-gray-200 rounded-md p-[10px] drop-shadow-lg"
              >
                <div className="flex justify-between rounded-md cursor-pointer">
                  <h2 className="text-[20px] font-bold flex-1">
                    {pastClass.class_id.class_name}
                  </h2>
                  <h3 className="text-[17px] font-semibold text-center bg-cyan-700 text-white rounded-md max_content mx-auto px-[10px] py-[3px]">
                    {pastClass.class_date}
                  </h3>
                </div>
                <h3 className="text-slate-500 text-[16px] font-semibold">
                  {pastClass.class_id.from_time} - {pastClass.class_id.to_time}{' '}
                  ({pastClass.status})
                </h3>
                {/* <button className="w-full mt-[10px] py-[4px] bg-red-400 rounded-md text-white font-semibold hover:bg-red-500 duration-300 text-[15px]">
                  Unbook Class
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
