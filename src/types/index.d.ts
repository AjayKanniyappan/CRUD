declare namespace CRUD {
  type FormOneData = {
    jobTitle: string;
    companyName: string;
    industry: string;
    location: string;
    remoteType: string;
  };
  type FormTwoData = {
    minimumExperience: string;
    maximumExperience: string;
    minimumSalary: string;
    maximumSalary: string;
    totalEmployee: string;
  };
  type JobData = {
    id?: string;
    jobTitle: string;
    companyName: string;
    industry: string;
    location: string;
    remoteType: string;
    minimumExperience: string;
    maximumExperience: string;
    minimumSalary: string;
    maximumSalary: string;
    totalEmployee: string;
    quickApply: boolean;
    externalApply: boolean;
  };
  type Headers = Readonly<Record<string, string | boolean>>;
  type Url = string;

  interface FormOneProps {
    className?: string;
    data: FormOneData;
    callBack: (params, params?) => void;
  }

  interface FormTwoProps {
    className?: string;
    data: FormTwoData;
    callBack: (params, params?) => void;
  }

  interface PageProps {
    className?: string;
    children: React.ReactNode;
  }

  interface ModalProps {
    value: boolean;
    callBack: (params, params?) => void;
    className?: string;
    children: React.ReactNode;
  }

  interface SectionProps {
    className?: string;
    children: React.ReactNode;
  }

  interface StepOneProps {
    isShow: boolean;
    setIsShow: (show: boolean) => void;
  }

  interface StepTwoProps {
    stepOneData: FormOneData;
    isCompleted: boolean;
    setIsCompleted: (show: boolean) => void;
  }

  interface Svg {
    className?: string;
  }
}
