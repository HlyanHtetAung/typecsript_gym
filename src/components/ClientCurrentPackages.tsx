import { FiPlus } from 'react-icons/fi';
import { BiWindowClose } from 'react-icons/bi';

import { useState, useEffect } from 'react';

type inputBoxTagProp = {
  packageName: string;
  customerCurrentPackages: any;
  setPackageName: any;
  setPackageType: any;
  setCurrentActivePackage: any;
  currentActivePackageId: any;
  setToUpdataPackageId: any;
  refetchFunction: any;
  setPackageAdd: any;
  currentCustomerId: any;
};

const ClientCurrentPackages = ({
  packageName,
  customerCurrentPackages,
  setPackageName,
  setPackageType,
  setCurrentActivePackage,
  currentActivePackageId,
  setPackageAdd,
  setToUpdataPackageId,
  refetchFunction,
  currentCustomerId,
}: inputBoxTagProp) => {
  const [openPackages, setOpenPackages] = useState<Boolean>(false);
  const [unPickPackages, setunPickPackages] = useState<[]>([]);

  const fetchCurrentPackages = async () => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/package/get`);
    const data = await res.json();

    const filteredResult =
      (packageName === 'Individual Packages' &&
        data.filter((dat: any) => dat.package_type === 'Individual')) ||
      (packageName === 'Group Packages' &&
        data.filter((dat: any) => dat.package_type === 'Group'));

    const finalFilteredResult = filteredResult.filter(
      (fltRes: any) =>
        !customerCurrentPackages.find(
          (curPack: any) => curPack.package_id.id === fltRes.id
        )
    );

    setunPickPackages(finalFilteredResult);
  };

  useEffect(() => {
    fetchCurrentPackages();
  }, [customerCurrentPackages]);

  const addPackageToCustomerPackageList = async (packageId: string) => {
    const res = await fetch(
      `${
        import.meta.env.VITE_HOST_URL
      }/customer-package/add?customer_id=${currentCustomerId}&package_id=${packageId}`
    );
    const data = await res.json();
    if (data.customer_id) {
      refetchFunction(data.customer_id);
    }
  };

  return (
    <div className="flex flex-col gap-[5px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-semibold">{packageName}</h3>
        {openPackages ? (
          <BiWindowClose
            onClick={() => setOpenPackages(false)}
            className="w-[30px] h-[30px] bg-red-500 rounded-full p-[5px] cursor-pointer text-white"
          />
        ) : (
          <FiPlus
            onClick={() => setOpenPackages(true)}
            className="w-[30px] h-[30px] bg-green-500 rounded-full p-[5px] cursor-pointer text-white"
          />
        )}
      </div>
      {openPackages ? (
        <div className="flex flex-wrap gap-[5px] my-[5px]">
          {unPickPackages.map((pack: any) => (
            <p
              onClick={() =>
                addPackageToCustomerPackageList(pack.id.toString())
              }
              className="px-[10px] py-[5px] bg-bgBlack text-primary rounded-full text-[14px] font-semibold cursor-pointer hover:bg-primary hover:text-white"
              key={pack.id}
            >
              {pack.package_name}
            </p>
          ))}
        </div>
      ) : null}
      <div className="bg-bgBlack p-[10px] rounded-md flex flex-col gap-[10px]">
        {customerCurrentPackages.map((cusPack: any) => (
          <div
            onClick={() => {
              setPackageName(cusPack.package_id.package_name);
              setPackageType(cusPack.package_id.package_type);
              setCurrentActivePackage(cusPack.id);
              setToUpdataPackageId(cusPack.package_id.id);
            }}
            key={cusPack.id}
            className={`flex justify-between ${
              currentActivePackageId === cusPack.id
                ? 'bg-green-500 '
                : 'bg-gray-200'
            } p-[10px] rounded-sm cursor-pointer`}
          >
            <p
              className={`${
                currentActivePackageId === cusPack.id ? 'text-white' : null
              } text-bgBlack font-bold text-[15px]`}
            >
              {cusPack.package_id.package_name}
            </p>
            <p
              className={`${
                currentActivePackageId === cusPack.id ? 'text-white' : null
              } text-bgBlack font-bold text-[15px]`}
            >
              {cusPack.points}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientCurrentPackages;
