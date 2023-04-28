import { FormTwo, Modal } from '@components/index';
import { useGlobalState } from '@components/Home';
import jobApi from '@services/job.service';
import '@styles/Steps.css';

function StepTwo({ stepOneData, isCompleted, setIsCompleted }: CRUD.StepTwoProps): JSX.Element {
  const { setGlobalState } = useGlobalState();
  const Data = {
    minimumExperience: '',
    maximumExperience: '',
    minimumSalary: '',
    maximumSalary: '',
    totalEmployee: '',
    applyType: 'quick',
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
    jobApi.create('job-post', jobData).then(() => {
      setGlobalState({ message: 'created' });
    });
    setIsCompleted(false);
  };

  return (
    <Modal
      value={isCompleted}
      callBack={setIsCompleted}
      className="form-steps md:h-[564px] md:w-[577px]"
    >
      <div className="steps-header">
        <h3 className="text-xl font-medium">Create a job</h3>
        <h3 className="text-base font-medium">Step 2</h3>
      </div>
      <FormTwo buttonName="save" data={Data} callBack={handleCallBack} />
    </Modal>
  );
}

export default StepTwo;
