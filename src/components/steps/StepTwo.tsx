/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
/* import ApiClient from '@services/ApiClient'; */
import FormTwo from '../forms/FormTwo';

function StepTwo({ stepOneData, isCompleted, setIsCompleted }: CRUD.StepTwo): JSX.Element {
  const handleClose = () => {
    setIsCompleted(false);
  };

  /* const headers: CRUD.Headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  };

  const api = new ApiClient('https://643941cd4660f26eb1ae59e5.mockapi.io/', headers);
 */
  const handleCallBack = (formData: any, apply: any) => {
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
    console.log(data);
    setIsCompleted(false);
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
              <Dialog.Panel className="w-full transform overflow-hidden rounded-lg border-[1px] border-[#E6E6E6] bg-white px-[32px] py-[32px] text-left align-middle shadow-xl transition-all md:h-[564px] md:w-[577px]">
                <div className="flex justify-between text-[#212121]">
                  <h3 className="text-xl font-medium">Create a job</h3>
                  <h3 className="text-md font-medium">Step 2</h3>
                </div>
                <FormTwo callBack={handleCallBack} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default StepTwo;
