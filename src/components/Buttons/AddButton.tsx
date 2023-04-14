import { useState } from 'react';
import { AddSvg } from '@svg/index';
import { StepOne } from '@components/index';

function AddButton(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className="fixed bottom-10 right-10 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#1597E4] hover:bg-[#1075b1] text-white"
        onClick={toggleModal}
      >
        <AddSvg className="w-9 h-9" />
      </button>
      <StepOne isShow={isOpen} setIsShow={setIsOpen} />
    </>
  );
}

export default AddButton;
