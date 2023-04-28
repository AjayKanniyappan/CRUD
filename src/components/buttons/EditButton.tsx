import { FormOne, FormTwo, Modal } from '@components/index';
import { useState } from 'react';

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
        <button
          className="mb-2 mr-2 rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300"
          type="button"
          onClick={() => setShow(true)}
        >
          Edit
        </button>
      </div>
      <Modal
        value={show}
        callBack={setShow}
        className="w-full transform overflow-hidden rounded-lg border-[1px] border-[#E6E6E6] bg-white px-[32px] py-[32px] text-left align-middle shadow-xl transition-all md:h-[564px] md:w-[577px]"
      >
        <div className="flex justify-between text-[#212121]">
          <h3 className="text-xl font-medium">Edit a job</h3>
          <h3 className="text-md font-medium">Step 1</h3>
        </div>
        <FormOne data={formData} callBack={handleForm} />
      </Modal>
      <Modal
        value={formTwo}
        callBack={setFormTwo}
        className="w-full transform overflow-hidden rounded-lg border-[1px] border-[#E6E6E6] bg-white px-[32px] py-[32px] text-left align-middle shadow-xl transition-all md:h-[564px] md:w-[577px]"
      >
        <div className="flex justify-between text-[#212121]">
          <h3 className="text-xl font-medium">Edit a job</h3>
          <h3 className="text-md font-medium">Step 2</h3>
        </div>
        <FormTwo buttonName="Edit" data={formTwoData} callBack={handleCallBack} />
      </Modal>
    </>
  );
}

export default EditButton;
