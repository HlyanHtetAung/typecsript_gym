import React, { useEffect } from 'react';
import ClientClass from '../components/ClientClass';
import { useGetClasses } from '../customHooks';
import { STYLES } from '../styles';
const ClientClasses = () => {
  const { classes } = useGetClasses();

  return (
    <div
      className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
    >
      <h2 className={`${STYLES.heading2OnBgWhite} text-black`}>Classes</h2>
      <div className="grid sm:grid-cols-2 gap-[20px] mt-[10px]">
        {classes.map((clsDetail: any, index: any) => (
          <ClientClass
            key={index}
            categoryName={clsDetail['Category Name']}
            trainerName={clsDetail['Trainer Name']}
            packageId={clsDetail.package_id}
            trainerId={clsDetail.trainer_id}
            packageType={clsDetail.package_type}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientClasses;
