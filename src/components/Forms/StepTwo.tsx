/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ApiClient from '@services/ApiClient';

function StepTwo({ stepOneData, isCompleted, setIsCompleted }: CRUD.StepTwo): JSX.Element {
  const [apply, setApply] = useState('quick');
  const handleClose = () => {
    setIsCompleted(false);
  };

  const headers: CRUD.Headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  };

  const api = new ApiClient('https://643941cd4660f26eb1ae59e5.mockapi.io/', headers);

  const [isValid, setIsValid] = useState({
    minimumExperience: true,
    maximumExperience: true,
    minimumSalary: true,
    maximumSalary: true,
    totalEmployee: true,
  });
  const [formData, setFormData] = useState({
    minimumExperience: '',
    maximumExperience: '',
    minimumSalary: '',
    maximumSalary: '',
    totalEmployee: '',
  });

  const validations = () => {
    const errors: any = {};
    const changes: any = {};

    if (!formData.minimumExperience) {
      errors.minimumExperience = 'Please fill out this field';
      changes.minimumExperience = false;
    } else {
      changes.minimumExperience = true;
    }

    if (!formData.maximumExperience) {
      errors.maximumExperience = 'Please fill out this field';
      changes.maximumExperience = false;
    } else {
      changes.maximumExperience = true;
    }

    if (!formData.minimumSalary) {
      errors.minimumSalary = 'Please fill out this field';
      changes.minimumSalary = false;
    } else {
      changes.minimumSalary = true;
    }

    if (!formData.maximumSalary) {
      errors.maximumSalary = 'Please fill out this field';
      changes.maximumSalary = false;
    } else {
      changes.maximumSalary = true;
    }

    if (!formData.totalEmployee) {
      errors.totalEmployee = 'Please fill out this field';
      changes.totalEmployee = false;
    } else {
      changes.totalEmployee = true;
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
      const data = {
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
      api.create('job-post', data);
      setIsCompleted(false);
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
    <Transition appear show={isCompleted} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
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
                  <h3 className="text-md font-medium">Step 2</h3>
                </div>
                <form
                  className="text-[#212121] font-medium mb-3"
                  onSubmit={(e) => handleOnSubmit(e)}
                >
                  <div className="py-[24px]">
                    <div className="pb-[4px]">
                      <label htmlFor="experience">
                        Experience<span className="text-[#d86161]">*</span>
                      </label>
                    </div>
                    <div className="flex space-x-5">
                      <div>
                        <input
                          type="text"
                          name="minimumExperience"
                          id="experience"
                          placeholder="Minimum"
                          className={`w-full outline-none text-[#212121] ring-1 placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3 ${
                            isValid.minimumExperience
                              ? 'ring-[#E6E6E6] focus:ring-[#1597E4]'
                              : 'ring-[#D86161] focus:ring-[#D86161]'
                          }`}
                          value={formData.minimumExperience}
                          onChange={(e) => handleOnChange(e)}
                        />
                        <div
                          className={`absolute text-sm text-[#D86161] ${
                            isValid.minimumExperience ? 'hidden' : 'block'
                          }`}
                        >
                          Please fill out this field
                        </div>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="maximumExperience"
                          id="experience"
                          placeholder="Maximum"
                          className={`w-full outline-none text-[#212121] ring-1 placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3 ${
                            isValid.maximumExperience
                              ? 'ring-[#E6E6E6] focus:ring-[#1597E4]'
                              : 'ring-[#D86161] focus:ring-[#D86161]'
                          }`}
                          value={formData.maximumExperience}
                          onChange={(e) => handleOnChange(e)}
                        />
                        <div
                          className={`absolute text-sm text-[#D86161] ${
                            isValid.maximumExperience ? 'hidden' : 'block'
                          }`}
                        >
                          Please fill out this field
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-[24px]">
                    <div className="pb-[4px]">
                      <label htmlFor="title">
                        Salary<span className="text-[#d86161]">*</span>
                      </label>
                    </div>
                    <div className="flex space-x-5">
                      <div>
                        <input
                          type="text"
                          name="minimumSalary"
                          id="salary"
                          placeholder="Minimum"
                          className={`w-full outline-none text-[#212121] ring-1 placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3 ${
                            isValid.minimumSalary
                              ? 'ring-[#E6E6E6] focus:ring-[#1597E4]'
                              : 'ring-[#D86161] focus:ring-[#D86161]'
                          }`}
                          value={formData.minimumSalary}
                          onChange={(e) => handleOnChange(e)}
                        />
                        <div
                          className={`absolute text-sm text-[#D86161] ${
                            isValid.maximumSalary ? 'hidden' : 'block'
                          }`}
                        >
                          Please fill out this field
                        </div>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="maximumSalary"
                          id="salary"
                          placeholder="Maximum"
                          className={`w-full outline-none text-[#212121] ring-1 placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3 ${
                            isValid.maximumSalary
                              ? 'ring-[#E6E6E6] focus:ring-[#1597E4]'
                              : 'ring-[#D86161] focus:ring-[#D86161]'
                          }`}
                          value={formData.maximumSalary}
                          onChange={(e) => handleOnChange(e)}
                        />
                        <div
                          className={`absolute text-sm text-[#D86161] ${
                            isValid.maximumSalary ? 'hidden' : 'block'
                          }`}
                        >
                          Please fill out this field
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pb-[24px]">
                    <div className="pb-[4px]">
                      <label htmlFor="industry">
                        Total Employee<span className="text-[#d86161]">*</span>
                      </label>
                    </div>
                    <div>
                      <input
                        type="number"
                        name="totalEmployee"
                        id="totalEmployee"
                        placeholder="ex. 100"
                        className={`w-full outline-none text-[#212121] ring-1 placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3 ${
                          isValid.totalEmployee
                            ? 'ring-[#E6E6E6] focus:ring-[#1597E4]'
                            : 'ring-[#D86161] focus:ring-[#D86161]'
                        }`}
                        value={formData.totalEmployee}
                        onChange={(e) => handleOnChange(e)}
                      />
                      <div
                        className={`absolute text-sm text-[#D86161] ${
                          isValid.totalEmployee ? 'hidden' : 'block'
                        }`}
                      >
                        Please fill out this field
                      </div>
                    </div>
                  </div>
                  <div className="pb-[24px]">
                    <div className="pb-[4px]">
                      <label htmlFor="industry">
                        Apply Type<span className="text-[#d86161]">*</span>
                      </label>
                    </div>
                    <div className="flex space-x-5">
                      <div className="flex items-center">
                        <input
                          checked={apply === 'quick'}
                          onChange={() => setApply('quick')}
                          type="checkbox"
                          id="applyType"
                          name="quickApply"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checked-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Quick apply
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked={apply === 'external'}
                          onChange={() => setApply('external')}
                          id="applyType"
                          name="externalApply"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checked-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          External apply
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-end pt-[90px]">
                    <div>
                      <button
                        type="submit"
                        className="text-white text-center rounded-md bg-[#1597E4] hover:bg-[#1075b1] py-2 px-5"
                      >
                        Save
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
  );
}

export default StepTwo;
