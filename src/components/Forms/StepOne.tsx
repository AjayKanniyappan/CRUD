/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import StepTwo from './StepTwo';

function StepOne({ isShow, setIsShow }: CRUD.StepOne): JSX.Element {
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [isValid, setIsValid] = useState({
    jobTitle: true,
    companyName: true,
    industry: true,
    location: true,
    remoteType: true,
  });
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    industry: '',
    location: '',
    remoteType: '',
  });

  const validations = () => {
    const errors: any = {};
    const changes: any = {};

    if (!formData.jobTitle) {
      errors.jobTitle = 'Please fill out this field';
      changes.jobTitle = false;
    } else {
      changes.jobTitle = true;
    }

    if (!formData.companyName) {
      errors.companyName = 'Please fill out this field';
      changes.companyName = false;
    } else {
      changes.companyName = true;
    }

    if (!formData.industry) {
      errors.industry = 'Please fill out this field';
      changes.industry = false;
    } else {
      changes.industry = true;
    }

    if (!formData.location) {
      errors.location = 'Please fill out this field';
      changes.location = false;
    } else {
      changes.location = true;
    }

    if (!formData.remoteType) {
      errors.remoteType = 'Please fill out this field';
      changes.remoteType = false;
    } else {
      changes.remoteType = true;
    }

    setIsValid({
      ...isValid,
      ...changes,
    });

    return errors;
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checkValid = validations();

    if (Object.keys(checkValid).length === 0) {
      setIsShow(false);
      setStepTwo(true);
    }
  };

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value,
    });
    setIsValid({
      ...isValid,
      [(event.target as HTMLInputElement).name]: true,
    });
  };

  return (
    <>
      <Transition appear show={isShow} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsShow(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-white overflow-hidden rounded-lg border-[1px] border-[#E6E6E6] transform shadow-xl transition-all w-full md:w-[577px] md:h-[564px] px-[32px] py-[32px] text-left align-middle">
                  <div className="flex justify-between text-[#212121]">
                    <h3 className="text-xl font-medium">Create a job</h3>
                    <h3 className="text-md font-medium">Step 1</h3>
                  </div>
                  <form
                    className="text-[#212121] font-medium mb-3"
                    onSubmit={(e) => handleOnSubmit(e)}
                  >
                    <div className="py-[24px]">
                      <div className="pb-[4px]">
                        <label htmlFor="jobTitle">
                          Job title<span className="text-[#d86161]">*</span>
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="jobTitle"
                          id="jobTitle"
                          placeholder="ex. UX UI Designer"
                          className={`w-full outline-none text-[#212121] ring-1 placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3 ${
                            isValid.jobTitle
                              ? 'ring-[#E6E6E6] focus:ring-[#1597E4]'
                              : 'ring-[#D86161] focus:ring-[#D86161]'
                          }`}
                          value={formData.jobTitle}
                          onChange={(e) => handleOnChange(e)}
                        />
                        <div
                          className={`absolute text-sm text-[#D86161] ${
                            isValid.jobTitle ? 'hidden' : 'block'
                          }`}
                        >
                          Please fill out this field
                        </div>
                      </div>
                    </div>
                    <div className="pb-[24px]">
                      <div className="pb-[4px]">
                        <label htmlFor="companyName">
                          Company name<span className="text-[#d86161]">*</span>
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="companyName"
                          id="companyName"
                          placeholder="ex. Google"
                          className={`w-full outline-none text-[#212121] ring-1 placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3 ${
                            isValid.companyName
                              ? 'ring-[#E6E6E6] focus:ring-[#1597E4]'
                              : 'ring-[#D86161] focus:ring-[#D86161]'
                          }`}
                          value={formData.companyName}
                          onChange={(e) => handleOnChange(e)}
                        />
                        <div
                          className={`absolute text-sm text-[#D86161] ${
                            isValid.companyName ? 'hidden' : 'block'
                          }`}
                        >
                          Please fill out this field
                        </div>
                      </div>
                    </div>
                    <div className="pb-[24px]">
                      <div className="pb-[4px]">
                        <label htmlFor="industry">
                          Industry<span className="text-[#d86161]">*</span>
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="industry"
                          id="industry"
                          placeholder="ex. Information Technology"
                          className={`w-full outline-none text-[#212121] ring-1 placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3 ${
                            isValid.industry
                              ? 'ring-[#E6E6E6] focus:ring-[#1597E4]'
                              : 'ring-[#D86161] focus:ring-[#D86161]'
                          }`}
                          value={formData.industry}
                          onChange={(e) => handleOnChange(e)}
                        />
                        <div
                          className={`absolute text-sm text-[#D86161] ${
                            isValid.industry ? 'hidden' : 'block'
                          }`}
                        >
                          Please fill out this field
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-full">
                        <div className="pb-[4px]">
                          <label htmlFor="location" className="pb-[4px]">
                            Location
                          </label>
                        </div>
                        <div>
                          <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="ex. Chennai"
                            className={`w-full outline-none text-[#212121] ring-1 placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3 ${
                              isValid.location
                                ? 'ring-[#E6E6E6] focus:ring-[#1597E4]'
                                : 'ring-[#D86161] focus:ring-[#D86161]'
                            }`}
                            value={formData.location}
                            onChange={(e) => handleOnChange(e)}
                          />
                          <div
                            className={`absolute text-sm text-[#D86161] ${
                              isValid.location ? 'hidden' : 'block'
                            }`}
                          >
                            Please fill out this field
                          </div>
                        </div>
                      </div>
                      <div className="w-full pl-[24px]">
                        <div className="pb-[4px]">
                          <label htmlFor="remoteType" className="pb-[24px]">
                            Remote type
                          </label>
                        </div>
                        <div>
                          <input
                            type="text"
                            name="remoteType"
                            id="remoteType"
                            placeholder="ex. In-office"
                            className={`w-full outline-none text-[#212121] ring-1 placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3 ${
                              isValid.remoteType
                                ? 'ring-[#E6E6E6] focus:ring-[#1597E4]'
                                : 'ring-[#D86161] focus:ring-[#D86161]'
                            }`}
                            value={formData.remoteType}
                            onChange={(e) => handleOnChange(e)}
                          />
                          <div
                            className={`absolute text-sm text-[#D86161] ${
                              isValid.remoteType ? 'hidden' : 'block'
                            }`}
                          >
                            Please fill out this field
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end justify-end pt-[90px]">
                      <div>
                        <button
                          type="submit"
                          className="text-white text-center rounded-md bg-[#1597E4] hover:bg-[#1075b1] py-2 px-5"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <StepTwo stepOneData={formData} isCompleted={stepTwo} setIsCompleted={setStepTwo} />
    </>
  );
}

export default StepOne;
