/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { formTwoValidation } from '@hooks/validations';
import '@styles/Form.css';

function FormTwo({ buttonName, data, callBack }: CRUD.FormTwoProps): JSX.Element {
  const [apply, setApply] = useState(data.applyType);
  const [isValid, setIsValid] = useState({
    minimumExperience: true,
    maximumExperience: true,
    minimumSalary: true,
    maximumSalary: true,
    totalEmployee: true,
  });
  const [formData, setFormData] = useState(data);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checkValid = formTwoValidation(isValid, formData, setIsValid);

    if (Object.keys(checkValid).length === 0) {
      const applyType = {
        quickApply: apply === 'quick',
        externalApply: apply !== 'quick',
      };
      const Data = { ...formData, ...applyType };
      callBack(Data, apply);
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
        <label htmlFor="experience">
          Experience<span className="error-color">*</span>
          <div className="flex space-x-5 pt-[4px]">
            <div>
              <input
                type="text"
                name="minimumExperience"
                id="experience"
                placeholder="Minimum"
                className={`input ${isValid.minimumExperience ? 'input-focus' : 'input-error'}`}
                value={formData.minimumExperience}
                onChange={(e) => handleOnChange(e)}
              />
              <div className={`error ${isValid.minimumExperience ? 'hidden' : 'block'}`}>
                Please fill out this field
              </div>
            </div>
            <div>
              <input
                type="text"
                name="maximumExperience"
                id="experience"
                placeholder="Maximum"
                className={`input ${isValid.maximumExperience ? 'input-focus' : 'input-error'}`}
                value={formData.maximumExperience}
                onChange={(e) => handleOnChange(e)}
              />
              <div className={`error ${isValid.maximumExperience ? 'hidden' : 'block'}`}>
                Please fill out this field
              </div>
            </div>
          </div>
        </label>
      </div>
      <div className="py-[24px]">
        <label htmlFor="salary">
          Salary<span className="error-color">*</span>
          <div className="flex space-x-5 pt-[4px]">
            <div>
              <input
                type="text"
                name="minimumSalary"
                id="salary"
                placeholder="Minimum"
                className={`input ${isValid.minimumSalary ? 'input-focus' : 'input-error'}`}
                value={formData.minimumSalary}
                onChange={(e) => handleOnChange(e)}
              />
              <div className={`error ${isValid.minimumSalary ? 'hidden' : 'block'}`}>
                Please fill out this field
              </div>
            </div>
            <div>
              <input
                type="text"
                name="maximumSalary"
                id="salary"
                placeholder="Maximum"
                className={`input ${isValid.maximumSalary ? 'input-focus' : 'input-error'}`}
                value={formData.maximumSalary}
                onChange={(e) => handleOnChange(e)}
              />
              <div className={`error ${isValid.maximumSalary ? 'hidden' : 'block'}`}>
                Please fill out this field
              </div>
            </div>
          </div>
        </label>
      </div>
      <div className="pb-[24px]">
        <label htmlFor="totalEmployee">
          Total Employee<span className="text-[#d86161]">*</span>
          <div className="pt-[4px]">
            <input
              type="number"
              name="totalEmployee"
              id="totalEmployee"
              placeholder="ex. 100"
              className={`input ${isValid.totalEmployee ? 'input-focus' : 'input-error'}`}
              value={formData.totalEmployee}
              onChange={(e) => handleOnChange(e)}
            />
            <div className={`error ${isValid.totalEmployee ? 'hidden' : 'block'}`}>
              Please fill out this field
            </div>
          </div>
        </label>
      </div>
      <div className="pb-[24px]">
        <label htmlFor="applyType">
          Apply Type
          <div className="flex space-x-5 pt-[4px]">
            <div className="flex items-center">
              <input
                checked={apply === 'quick'}
                onChange={() => setApply('quick')}
                type="checkbox"
                id="quickApply"
                name="quickApply"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="quickApply"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Quick apply
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={apply === 'external'}
                onChange={() => setApply('external')}
                id="externalApply"
                name="externalApply"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="externalApply"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                External apply
              </label>
            </div>
          </div>
        </label>
      </div>
      <div className="btn-container">
        <div>
          <button type="submit" className="btn-primary">
            {buttonName}
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormTwo;
