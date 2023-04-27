import { FormTwo, Modal } from '@components/index';

function StepTwo({ stepOneData, isCompleted, setIsCompleted }: CRUD.StepTwoProps): JSX.Element {
  const Data = {
    minimumExperience: '',
    maximumExperience: '',
    minimumSalary: '',
    maximumSalary: '',
    totalEmployee: '',
  };

  const handleCallBack = (formData: CRUD.FormTwoData, apply: string) => {
    const jobData = {
      jobTitle: stepOneData?.jobTitle,
      companyName: stepOneData?.companyName,
      industry: stepOneData?.industry,
      location: stepOneData?.location,
      remoteType: stepOneData?.remoteType,
      minimumExperience: formData.minimumExperience,
      maximumExperience: formData.maximumExperience,
      minimumSalary: formData.minimumSalary,
      maximumSalary: formData.maximumSalary,
      totalEmployee: formData.totalEmployee,
      quickApply: apply === 'quick',
      externalApply: apply !== 'quick',
    };
    // eslint-disable-next-line no-console
    console.log(jobData);
    setIsCompleted(false);
  };

  return (
    <Modal
      value={isCompleted}
      callBack={setIsCompleted}
      className="w-full transform overflow-hidden rounded-lg border-[1px] border-[#E6E6E6] bg-white px-[32px] py-[32px] text-left align-middle shadow-xl transition-all md:h-[564px] md:w-[577px]"
    >
      <div className="flex justify-between text-[#212121]">
        <h3 className="text-xl font-medium">Create a job</h3>
        <h3 className="text-md font-medium">Step 2</h3>
      </div>
      <FormTwo data={Data} callBack={handleCallBack} />
    </Modal>
  );
}

export default StepTwo;
