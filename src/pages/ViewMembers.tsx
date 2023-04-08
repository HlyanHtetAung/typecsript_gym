import { STYLES } from '../styles';
import { CiSearch } from 'react-icons/ci';
import InputBoxTag from '../components/InputBoxTag';
import { useState, useEffect } from 'react';
import ClientCurrentPackages from '../components/ClientCurrentPackages';

const ViewMembers = () => {
  const [packageName, setPackageName] = useState<string>('');
  const [packageType, setPackageType] = useState('Select');
  const [currentActivePackageId, setCurrentActivePackage] = useState<any>();
  const [point, setPoint] = useState<any>(0);
  const [customerIndividualPackages, setCustomerIndividualPackages] = useState<
    []
  >([]);
  const [clickedSelectPackage, setClickedSelectPackage] = useState<any>(false);
  const [customerGrouplPackages, setCustomerGroupPackages] = useState<[]>([]);

  const fetchCustomerCurrentPackageData = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_HOST_URL}/customer-package/get?customer_id=1`
    );
    const data = await res.json();
    setCustomerIndividualPackages(
      data.filter((dat: any) => dat.package_id.package_type === 'Individual')
    );
    setCustomerGroupPackages(
      data.filter((dat: any) => dat.package_id.package_type === 'Group')
    );
  };

  useEffect(() => {
    fetchCustomerCurrentPackageData();
  }, []);

  const refillPointHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('soijselkrj');
  };

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
              <ClientCurrentPackages
                packageName="Individual Packages"
                customerCurrentPackages={customerIndividualPackages}
                setPackageName={setPackageName}
                setPackageType={setPackageType}
                setCurrentActivePackage={setCurrentActivePackage}
                currentActivePackageId={currentActivePackageId}
              />
              <ClientCurrentPackages
                packageName="Group Packages"
                customerCurrentPackages={customerGrouplPackages}
                setPackageName={setPackageName}
                setPackageType={setPackageType}
                setCurrentActivePackage={setCurrentActivePackage}
                currentActivePackageId={currentActivePackageId}
              />
            </div>
            {/* form */}
            <form
              onSubmit={refillPointHandle}
              className="flex-1 bg-white p-[20px] rounded-md flex flex-col gap-[20px] h-max"
            >
              <h3 className="text-center uppercase font-poppins font-bold text-secondary">
                {packageType}
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
              <div className="flex gap-[20px] justify-between">
                <button className="w-full bg-primary py-[10px] rounded-md font-poppins font-bold text-secondary">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full bg-primary py-[10px] rounded-md font-poppins font-bold text-secondary"
                >
                  Refill Point
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMembers;
