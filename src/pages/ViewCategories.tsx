import { useGetCategories } from '../customHooks';
import { openCategoryModal } from '../stores/editCategoryModalSlice';
import { useAppDispatch } from '../stores/hooks';
import { STYLES } from '../styles';
import DataTable from 'react-data-table-component';

const ViewCategories = () => {
  const { categories } = useGetCategories();
  const dispatch = useAppDispatch();

  const editClickHandle = (id: any, name: any) => {
    dispatch(openCategoryModal({ id, name }));
  };

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px',
        // override the row height
      },
    },
    headCells: {
      style: {
        backgroundColor: 'lightgray',
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        fontWeight: 'bold',
        fontSize: '16px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        fontSize: '16px',
      },
    },
  };

  const columns = [
    {
      name: 'Category name',
      selector: (row: any) => row.name,
    },
    {
      name: 'Action',
      selector: (row: any) => (
        <button
          onClick={() => editClickHandle(row.id, row.name)}
          className="bg-red-500 py-[6px] px-[10px] rounded-md text-red-900 font-poppins text-[15px]"
        >
          Edit
        </button>
      ),
    },
  ];

  const data = categories.map((cate: any) => cate);

  return (
    <div
      className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
    >
      <h2 className={`${STYLES.heading2OnBgWhite} my-[10px]`}>
        All Categories
      </h2>
      <DataTable columns={columns} data={data} customStyles={customStyles} />
    </div>
  );
};

export default ViewCategories;
