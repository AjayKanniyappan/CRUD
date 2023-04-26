import { useState } from 'react';
import { formOneValidation } from '@hooks/validations';
import '@styles/Form.css';

function FormOne({ callBack }: CRUD.FormOne) {
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

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checkValid = formOneValidation(isValid, formData, setIsValid);

    if (Object.keys(checkValid).length === 0) {
      callBack(formData);
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
    <form className="form-container" onSubmit={(e) => handleOnSubmit(e)}>
      <div className="py-[24px]">
        <label htmlFor="jobTitle">
          Job title<span className="error-color">*</span>
          <div className="pt-[4px]">
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="ex. UX UI Designer"
              className={`input ${isValid.jobTitle ? 'input-focus' : 'input-error'}`}
              value={formData.jobTitle}
              onChange={(e) => handleOnChange(e)}
            />
            <div className={`error ${isValid.jobTitle ? 'hidden' : 'block'}`}>
              Please fill out this field
            </div>
          </div>
        </label>
      </div>
      <div className="pb-[24px]">
        <label htmlFor="companyName">
          Company name<span className="error-color">*</span>
          <div className="pt-[4px]">
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="ex. Google"
              className={`input ${isValid.companyName ? 'input-focus' : 'input-error'}`}
              value={formData.companyName}
              onChange={(e) => handleOnChange(e)}
            />
            <div className={`error ${isValid.companyName ? 'hidden' : 'block'}`}>
              Please fill out this field
            </div>
          </div>
        </label>
      </div>
      <div className="pb-[24px]">
        <label htmlFor="industry">
          Industry<span className="error-color">*</span>
          <div className="pt-[4px]">
            <input
              type="text"
              name="industry"
              id="industry"
              placeholder="ex. Information Technology"
              className={`input ${isValid.industry ? 'input-focus' : 'input-error'}`}
              value={formData.industry}
              onChange={(e) => handleOnChange(e)}
            />
            <div className={`error ${isValid.industry ? 'hidden' : 'block'}`}>
              Please fill out this field
            </div>
          </div>
        </label>
      </div>
      <div className="flex">
        <div className="w-full">
          <label htmlFor="location" className="pb-[4px]">
            Location
            <div className="pt-[4px]">
              <input
                type="text"
                name="location"
                id="location"
                placeholder="ex. Chennai"
                className={`input ${isValid.location ? 'input-focus' : 'input-error'}`}
                value={formData.location}
                onChange={(e) => handleOnChange(e)}
              />
              <div className={`error ${isValid.location ? 'hidden' : 'block'}`}>
                Please fill out this field
              </div>
            </div>
          </label>
        </div>
        <div className="w-full pl-[24px]">
          <label htmlFor="remoteType" className="pb-[24px]">
            Remote type
            <div className="pt-[4px]">
              <input
                type="text"
                name="remoteType"
                id="remoteType"
                placeholder="ex. In-office"
                className={`input ${isValid.remoteType ? 'input-focus' : 'input-error'}`}
                value={formData.remoteType}
                onChange={(e) => handleOnChange(e)}
              />
              <div className={`error ${isValid.remoteType ? 'hidden' : 'block'}`}>
                Please fill out this field
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="btn-container">
        <div>
          <button type="submit" className="btn-primary">
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormOne;
