declare namespace CRUD {
  type FormOneData = {
    jobTitle: string;
    companyName: string;
    industry: string;
    location: string;
    remoteType: string;
  };
  type Headers = Readonly<Record<string, string | boolean>>;
  type Url = string;

  interface FormOne {
    callBack: (params) => void;
  }

  interface FormTwo {
    callBack: (params, params) => void;
  }

  interface PageProps {
    className?: string;
    children: React.ReactNode;
  }

  interface SectionProps {
    className?: string;
    children: React.ReactNode;
  }

  interface StepOne {
    isShow: boolean;
    setIsShow: (show: boolean) => void;
  }

  interface StepOneData {
    id?: number;
    jobTitle: string;
    companyName: string;
    industry: string;
    location: string;
    remoteType: string;
  }

  interface StepTwo {
    stepOneData: FormOneData;
    isCompleted: boolean;
    setIsCompleted: (show: boolean) => void;
  }

  interface Svg {
    className?: string;
  }
}
