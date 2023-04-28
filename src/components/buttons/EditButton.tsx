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
      <Modal value={show} callBack={setShow} className="edit-container md:h-[564px] md:w-[577px]">
        <div className="edit-header">
          <h3 className="text-xl font-medium">Edit a job</h3>
          <h3 className="text-md font-medium">Step 1</h3>
        </div>
        <FormOne data={formData} callBack={handleForm} />
      </Modal>
      <Modal
        value={formTwo}
        callBack={setFormTwo}
        className="edit-container md:h-[564px] md:w-[577px]"
      >
        <div className="edit-header">
          <h3 className="text-xl font-medium">Edit a job</h3>
          <h3 className="text-md font-medium">Step 2</h3>
        </div>
        <FormTwo buttonName="Edit" data={formTwoData} callBack={handleCallBack} />
      </Modal>
    </>
  );
}

export default EditButton;
