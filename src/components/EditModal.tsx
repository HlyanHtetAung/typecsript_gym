import React, { useRef } from 'react';
import { useAppDispatch } from '../stores/hooks';

type EditModalProps = {
  children: React.ReactNode;
  header: string;
  buttonName: string;
  onClick: (e: React.FormEvent<HTMLFormElement>) => void;
  closeModalFunc: () => void;
};

const EditModal = ({
  children,
  header,
  buttonName,
  onClick,
  closeModalFunc,
}: EditModalProps) => {
  const modalRef: any = useRef<React.LegacyRef<HTMLDivElement>>();

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current == e.target) {
      closeModalFunc();
    }
  };

  return (
    <div
      onClick={closeModal}
      ref={modalRef}
      className="
        absolute
        top-0
        left-0
        bg-black
        bg-opacity-80
        h-screen
        w-full
        z-50
        flex
        items-center
        justify-center
      "
    >
      <form
        className="
          bg-slate-300 px-[20px] py-[30px] w-[400px] rounded-md flex flex-col gap-[10px]
        "
        onSubmit={onClick}
      >
        <h2 className="font-bold text-[20px] text-slate-900 mb-[10px]">
          {header}
        </h2>
        {children}
        <button
          type="submit"
          className="bg-slate-700 w-full text-white py-[10px] rounded-md"
        >
          {buttonName}
        </button>
      </form>
    </div>
  );
};

export default EditModal;
