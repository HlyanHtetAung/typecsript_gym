import React, { useEffect } from 'react';
import { useGetClasses } from '../customHooks';
const ClientClasses = () => {
  const { classes } = useGetClasses();
  console.log(classes);
  return <div>ClientClasses</div>;
};

export default ClientClasses;
