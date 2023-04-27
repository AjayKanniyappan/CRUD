import { useState } from 'react';
import { FormOne, Modal, StepTwo } from '@components/index';

function StepOne({ isShow, setIsShow }: CRUD.StepOneProps): JSX.Element {
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [values, setValues] = useState<CRUD.FormOneData>();
  const formData = {
    jobTitle: '',
    companyName: '',
    industry: '',
    location: '',
    remoteType: '',
  };

  const handleForm = (data: CRUD.FormOneData) => {
    setValues(data);
    setIsShow(false);
    setStepTwo(true);
  };

  return (
    <>
      <Modal
        value={isShow}
        callBack={setIsShow}
        className="w-full transform overflow-hidden rounded-lg border-[1px] border-[#E6E6E6] bg-white px-[32px] py-[32px] text-left align-middle shadow-xl transition-all md:h-[564px] md:w-[577px]"
      >
        <div className="flex justify-between text-[#212121]">
          <h3 className="text-xl font-medium">Create a job</h3>
          <h3 className="text-md font-medium">Step 1</h3>
        </div>
        <FormOne data={formData} callBack={handleForm} />
      </Modal>
      <StepTwo
        stepOneData={values as CRUD.FormOneData}
        isCompleted={stepTwo}
        setIsCompleted={setStepTwo}
      />
    </>
  );
}

export default StepOne;
