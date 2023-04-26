import { useState } from 'react';
import { AddSvg } from '@svg/index';
import { StepOne } from '@components/index';
import '@styles/AddButton.css';

/**
 * This is a TypeScript React component that renders a button with an icon and toggles a modal when
 * clicked.
 * @returns A JSX element containing a button with an onClick event that toggles the value of the
 * isOpen state variable and an SVG icon. Additionally, a StepOne component is conditionally rendered
 * based on the value of the isOpen state variable.
 */
function AddButton(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" className="btn" onClick={toggleModal}>
        <AddSvg className="h-9 w-9" />
      </button>
      <StepOne isShow={isOpen} setIsShow={setIsOpen} />
    </>
  );
}

export default AddButton;
