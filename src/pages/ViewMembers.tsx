import { STYLES } from '../styles';
import { CiSearch } from 'react-icons/ci';
import { FiPlus } from 'react-icons/fi';
import InputBoxTag from '../components/InputBoxTag';
import { useState, useEffect } from 'react';
import ClientCurrentPackages from '../components/ClientCurrentPackages';
const ViewMembers = () => {
  const [packageName, setPackageName] = useState<string>('Pilates');
  const [point, setPoint] = useState<string>('');

  const fetchCustomerCurrentPackageData = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_HOST_URL}/customer-package/get?customer_id=1`
    );
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchCustomerCurrentPackageData();
  }, []);
  return (
    <div
      className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX}`}
    >
      <div className="px-[10px] py-[8px] bg-secondary flex items-center gap-[5px] mt-[20px] rounded-md drop-shadow-md">
        <CiSearch className="w-[30px] h-[30px] text-gray-400" />
        <input
          className="outline-none flex-1 bg-transparent placeholder:text-gray-400 font-normal text-white"
          type="text"
          placeholder="search member with id"
        />
      </div>
      <div className="mt-[20px]">
        <div className="bg-gray-200 p-[20px] rounded-md drop-shadow-lg">
          <div className="  rounded-md  flex items-center justify-between">
            <h2 className="text-[20px] font-bold">Customer Name 1</h2>
            <h2 className="text-[20px] font-bold">CID: C001</h2>
          </div>
          <div className="mt-[15px] flex gap-[20px] items-center">
            <div className="flex-1 flex flex-col gap-[10px]">
              <ClientCurrentPackages packageName="Individual Packages" />
              <ClientCurrentPackages packageName="Group Packages" />
            </div>
            {/* form */}
            <form className="flex-1 bg-white p-[20px] rounded-md flex flex-col gap-[20px] h-max">
              <h3 className="text-center uppercase font-poppins font-bold text-secondary">
                Individual
              </h3>
              <InputBoxTag
                setValue={setPackageName}
                value={packageName}
                disableInput
              />
              <InputBoxTag
                setValue={setPoint}
                value={point}
                placholder="Enter a refill point"
                numberInput
              />
              <button className="w-full bg-primary py-[10px] rounded-md font-poppins font-bold text-secondary">
                Refill Point
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMembers;
