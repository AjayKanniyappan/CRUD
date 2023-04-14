import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import StepTwo from './StepTwo';

function StepOne({ isShow, setIsShow }: CRUD.StepOne): JSX.Element {
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [isValid, setIsValid] = useState({
    title: true,
    company: true,
    industry: true,
  });
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    industry: '',
    location: '',
    remote: '',
  });

  const validations = () => {
    const errors: any = {};
    const changes: any = {};

    if (!formData.title) {
      errors.title = 'Please fill out this field';
      changes.title = false;
    } else {
      changes.title = true;
    }

    if (!formData.company) {
      errors.company = 'Please fill out this field';
      changes.company = false;
    } else {
      changes.company = true;
    }

    if (!formData.industry) {
      errors.industry = 'Please fill out this field';
      changes.industry = false;
    } else {
      changes.industry = true;
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
    console.log(isValid);

    console.log(Object.keys(checkValid).length === 0);
    if (Object.keys(checkValid).length === 0) {
      // Submit form data
      console.log(formData);
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
                        <label htmlFor="title">
                          Job title<span className="text-[#d86161]">*</span>
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          placeholder="ex. UX UI Designer"
                          className={`w-full outline-none text-[#212121] ring-1 placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3 ${
                            isValid.title
                              ? 'ring-[#E6E6E6] focus:ring-[#1597E4]'
                              : 'ring-[#D86161] focus:ring-[#D86161]'
                          }`}
                          value={formData.title}
                          onChange={(e) => handleOnChange(e)}
                        />
                        <div
                          className={`absolute text-sm text-[#D86161] ${
                            isValid.title ? 'hidden' : 'block'
                          }`}
                        >
                          Please fill out this field
                        </div>
                      </div>
                    </div>
                    <div className="pb-[24px]">
                      <div className="pb-[4px]">
                        <label htmlFor="company">
                          Company name<span className="text-[#d86161]">*</span>
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          placeholder="ex. Google"
                          className={`w-full outline-none text-[#212121] ring-1 placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3 ${
                            isValid.company
                              ? 'ring-[#E6E6E6] focus:ring-[#1597E4]'
                              : 'ring-[#D86161] focus:ring-[#D86161]'
                          }`}
                          value={formData.company}
                          onChange={(e) => handleOnChange(e)}
                        />
                        <div
                          className={`absolute text-sm text-[#D86161] ${
                            isValid.company ? 'hidden' : 'block'
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
                            className="w-full outline-none text-[#212121] ring-1 ring-[#E6E6E6] focus:ring-[#1597E4] placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3"
                            value={formData.location}
                            onChange={(e) => handleOnChange(e)}
                          />
                        </div>
                      </div>
                      <div className="w-full pl-[24px]">
                        <div className="pb-[4px]">
                          <label htmlFor="remote" className="pb-[24px]">
                            Remote type
                          </label>
                        </div>
                        <div>
                          <input
                            type="text"
                            name="remote"
                            id="remote"
                            placeholder="ex. In-office"
                            className="w-full outline-none text-[#212121] ring-1 ring-[#E6E6E6] focus:ring-[#1597E4] placeholder:text-[#7A7A7A] placeholder:font-normal rounded-md py-[5px] pl-3"
                            value={formData.remote}
                            onChange={(e) => handleOnChange(e)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end justify-end pt-[90px]">
                      <div>
                        <button className="text-white text-center rounded-md bg-[#1597E4] hover:bg-[#1075b1] py-2 px-5">
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
      <StepTwo isCompleted={stepTwo} setIsCompleted={setStepTwo} />
    </>
  );
}

export default StepOne;
