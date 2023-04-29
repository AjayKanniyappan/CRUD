import { FormOne, FormTwo, Modal } from '@components/index';
import { useState } from 'react';
import '@styles/EditButton.css';

function EditButton({ jobId, jobData, handleEdit }: CRUD.EditProps): JSX.Element {
  const [formTwo, setFormTwo] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState({});

  const formData = {
    jobTitle: jobData.jobTitle,
    companyName: jobData.companyName,
    industry: jobData.industry,
    location: jobData.location,
    remoteType: jobData.remoteType,
  };

  const formTwoData = {
    minimumExperience: jobData.minimumExperience,
    maximumExperience: jobData.maximumExperience,
    minimumSalary: jobData.maximumSalary,
    maximumSalary: jobData.maximumSalary,
    totalEmployee: jobData.totalEmployee,
    applyType: jobData.quickApply === true ? 'quick' : 'external',
  };

  const handleForm = (val: CRUD.FormOneData) => {
    setEdit(val);
    setShow(false);
    setFormTwo(true);
  };

  const handleCallBack = (data: CRUD.FormTwoData) => {
    const merge = { ...edit, ...data };
    setFormTwo(false);
    handleEdit(jobId, merge);
  };

  return (
    <>
      <div>
        <button className="btn-edit" type="button" onClick={() => setShow(true)}>
          Edit
        </button>
      </div>
      <Modal value={show} callBack={setShow} className="md:h-[564px] md:w-[577px]">
        <FormOne formHeader="Edit a job" data={formData} callBack={handleForm} />
      </Modal>
      <Modal value={formTwo} callBack={setFormTwo} className="md:h-[564px] md:w-[577px]">
        <FormTwo
          formHeader="Edit a job"
          buttonName="Edit"
          data={formTwoData}
          callBack={handleCallBack}
        />
      </Modal>
    </>
  );
}

export default EditButton;
