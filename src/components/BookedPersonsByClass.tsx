import { useEffect, useState } from 'react';
import { ExpanderComponentProps } from 'react-data-table-component';

const BookedPersonsByClass = ({ data }: any) => {
  const [bookedPersons, setBookedPersons] = useState<any>([]);

  useEffect(() => {
    // console.log(data?.class?.id);
    const fetchBookedPersons = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_HOST_URL}/schedule/booking?class_id=${
          data?.class?.id
        }&date=${data.date}`
      );
      const responseData = await res.json();
      console.log('responseData', responseData);
    };

    fetchBookedPersons();
  }, []);
  return <div>hello</div>;
};

export default BookedPersonsByClass;
