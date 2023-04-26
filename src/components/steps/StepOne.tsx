import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import FormOne from '../forms/FormOne';
import StepTwo from './StepTwo';

function StepOne({ isShow, setIsShow }: CRUD.StepOne): JSX.Element {
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [values, setValues] = useState<CRUD.FormOneData>();

  const handleForm = (data: CRUD.FormOneData) => {
    setValues(data);
    setIsShow(false);
    setStepTwo(true);
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
                <Dialog.Panel className="w-full transform overflow-hidden rounded-lg border-[1px] border-[#E6E6E6] bg-white px-[32px] py-[32px] text-left align-middle shadow-xl transition-all md:h-[564px] md:w-[577px]">
                  <div className="flex justify-between text-[#212121]">
                    <h3 className="text-xl font-medium">Create a job</h3>
                    <h3 className="text-md font-medium">Step 1</h3>
                  </div>
                  <FormOne callBack={handleForm} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <StepTwo stepOneData={values!} isCompleted={stepTwo} setIsCompleted={setStepTwo} />
    </>
  );
}

export default StepOne;
