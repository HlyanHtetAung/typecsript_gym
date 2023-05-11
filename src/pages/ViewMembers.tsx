import { STYLES } from '../styles';
import { CiSearch } from 'react-icons/ci';
import InputBoxTag from '../components/InputBoxTag';
import { useState, useEffect } from 'react';
import ClientCurrentPackages from '../components/ClientCurrentPackages';

const ViewMembers = () => {
  const [searchInput, setSearchInput] = useState<any>('');
  const [packageName, setPackageName] = useState<string>('');
  const [packageType, setPackageType] = useState('Select');
  const [currentActivePackageId, setCurrentActivePackage] = useState<any>();
  const [point, setPoint] = useState<any>(0);
  const [soldAmount, setSoldAmount] = useState<any>(0);
  const [customerIndividualPackages, setCustomerIndividualPackages] = useState<
    []
  >([]);
  const [clickedSelectPackage, setClickedSelectPackage] = useState<any>(false);
  const [customerGrouplPackages, setCustomerGroupPackages] = useState<[]>([]);
  const [packageAdd, setPackageAdd] = useState<boolean>(false);
  const [toUpdatePackageId, setToUpdataPackageId] = useState<any>();
  const [currentCustomerId, setCurrentCustomerId] = useState<any>('');
  const [currentCustomerName, setCurrentCustomerName] = useState<any>('');

  const fetchCustomerCurrentPackageData = async (id: any) => {
    const res = await fetch(
      `${import.meta.env.VITE_HOST_URL}/customer-package/get?customer_id=${id}`
    );
    const data = await res.json();
    console.log(data);
    setCurrentCustomerId(data[0].customer_id.id);
    setCurrentCustomerName(data[0].customer_id.name);

    setCustomerIndividualPackages(
      data.filter((dat: any) => dat.package_id.package_type === 'Individual')
    );
    setCustomerGroupPackages(
      data.filter((dat: any) => dat.package_id.package_type === 'Group')
    );
  };

  const refillPointHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentActivePackageId) {
      return;
    }
    if (point <= 0) {
      return;
    }

    if (currentActivePackageId) {
      const res = await fetch(
        `${
          import.meta.env.VITE_HOST_URL
        }/customer-package/update?customer_id=${currentCustomerId}&package_id=${toUpdatePackageId}&points=${point}&amount=${soldAmount}`
      );

      const data = await res.json();

      if (data.customer_id) {
        fetchCustomerCurrentPackageData(currentCustomerId);
        setPackageName('');
        setPackageType('');
        setCurrentActivePackage('');
        setPoint(0);
        setToUpdataPackageId('');
        setSoldAmount(0);
      }
    }
  };

  return (
    <div
      className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX}`}
    >
      <div className="px-[10px] py-[8px] bg-secondary flex items-center gap-[5px] mt-[20px] rounded-md drop-shadow-md">
        <CiSearch className="w-[30px] h-[30px] text-gray-400" />
        <input
          value={searchInput}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              fetchCustomerCurrentPackageData(searchInput);
            }
          }}
          onChange={(e) => setSearchInput(e.target.value)}
          className="outline-none flex-1 bg-transparent placeholder:text-gray-400 font-normal text-white"
          type="text"
          placeholder="search member with id"
        />
      </div>
      {currentCustomerId && (
        <div className="mt-[20px]">
          <div className="bg-gray-200 p-[20px] rounded-md drop-shadow-lg">
            <div className="  rounded-md  flex items-center justify-between">
              <h2 className="text-[20px] font-bold">{currentCustomerName}</h2>
              <h2 className="text-[20px] font-bold">
                CID: {currentCustomerId}
              </h2>
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
                  setPackageAdd={setPackageAdd}
                  setToUpdataPackageId={setToUpdataPackageId}
                  refetchFunction={fetchCustomerCurrentPackageData}
                />
                <ClientCurrentPackages
                  packageName="Group Packages"
                  customerCurrentPackages={customerGrouplPackages}
                  setPackageName={setPackageName}
                  setPackageType={setPackageType}
                  setCurrentActivePackage={setCurrentActivePackage}
                  currentActivePackageId={currentActivePackageId}
                  setPackageAdd={setPackageAdd}
                  setToUpdataPackageId={setToUpdataPackageId}
                  refetchFunction={fetchCustomerCurrentPackageData}
                />
              </div>
              {/* form */}
              <form
                onSubmit={refillPointHandle}
                className="flex-1 bg-white p-[20px] rounded-md flex flex-col gap-[10px] h-max"
              >
                <h3 className="text-center uppercase font-poppins font-bold text-secondary">
                  {packageType}
                </h3>
                <InputBoxTag
                  setValue={setPackageName}
                  value={packageName}
                  disableInput
                />
                <h3 className="font-bold">Point</h3>
                <InputBoxTag
                  setValue={setPoint}
                  value={point}
                  placholder="Enter a refill point"
                  numberInput
                />
                <h3 className="font-bold">Amount</h3>
                <InputBoxTag
                  setValue={setSoldAmount}
                  value={soldAmount}
                  placholder="Enter an amount"
                  numberInput
                />
                <div className="flex gap-[20px] justify-between">
                  <button
                    onClick={() => {
                      setPackageName('');
                      setPackageType('');
                      setCurrentActivePackage('');
                      setPoint(0);
                      setSoldAmount(0);
                    }}
                    type="button"
                    className="w-full bg-primary py-[10px] rounded-md font-poppins font-bold text-secondary"
                  >
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
      )}
    </div>
  );
};

export default ViewMembers;
