/* eslint-disable @typescript-eslint/no-explicit-any */
function formOneValidation(isValid: any, formData: any, callback: any) {
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

  callback({
    ...isValid,
    ...changes,
  });

  return errors;
}

function formTwoValidation(isValid: any, formData: any, callback: any) {
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

  callback({
    ...isValid,
    ...changes,
  });

  return errors;
}

export { formOneValidation, formTwoValidation };
