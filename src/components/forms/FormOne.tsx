import { useState } from 'react';
import { formOneValidation } from '@hooks/validations';
import '@styles/Form.css';

function FormOne({ formHeader, data, callBack }: CRUD.FormOneProps): JSX.Element {
  const [isValid, setIsValid] = useState({
    jobTitle: true,
    companyName: true,
    industry: true,
    location: true,
    remoteType: true,
  });
  const [formData, setFormData] = useState(data);

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
      <div className="form-header">
        <h3 className="text-xl font-medium">{formHeader}</h3>
        <h3 className="text-base font-medium">Step 1</h3>
      </div>
      <div className="py-6">
        <label htmlFor="jobTitle">
          Job title<span className="error-color">*</span>
          <div className="pt-1">
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
      <div className="pb-6">
        <label htmlFor="companyName">
          Company name<span className="error-color">*</span>
          <div className="pt-1">
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
      <div className="pb-6">
        <label htmlFor="industry">
          Industry<span className="error-color">*</span>
          <div className="pt-1">
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
      <div className="flex space-x-6">
        <div className="w-full">
          <label htmlFor="location" className="pb-1">
            Location
            <div className="pt-1">
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
        <div className="w-full">
          <label htmlFor="remoteType" className="pb-6">
            Remote type
            <div className="pt-1">
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
