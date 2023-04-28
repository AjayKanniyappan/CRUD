import { useState } from 'react';
import { FormOne, Modal, StepTwo } from '@components/index';
import '@styles/Steps.css';

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
      <Modal value={isShow} callBack={setIsShow} className="form-steps md:h-[564px] md:w-[577px]">
        <div className="steps-header">
          <h3 className="text-xl font-medium">Create a job</h3>
          <h3 className="text-base font-medium">Step 1</h3>
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
