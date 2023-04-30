import { useState } from 'react';
import { FormOne, Modal, StepTwo } from '@components/index';

function StepOne({ className, isShow, setIsShow }: CRUD.StepOneProps): JSX.Element {
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
      <Modal value={isShow} callBack={setIsShow} className={className}>
        <FormOne formHeader="Create a job" data={formData} callBack={handleForm} />
      </Modal>
      <StepTwo
        className="md:h-[564px] md:w-[577px]"
        formHeader="Create a job"
        stepOneData={values as CRUD.FormOneData}
        isCompleted={stepTwo}
        setIsCompleted={setStepTwo}
      />
    </>
  );
}

export default StepOne;
