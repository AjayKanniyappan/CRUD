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
    applyType: string;
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

  interface CardProps {
    className?: string;
    data: JobData;
    cardId: string | number | null;
    handleCardClick: (params?) => void;
    editHandler: (params?, params?) => void;
    deleteHandler: (params?) => void;
  }

  interface EditProps {
    className?: string;
    jobId: string;
    jobData: JobData;
    handleEdit: (params?, params?) => void;
  }

  interface DeleteProps {
    className?: string;
    jobId: string;
    handleDelete: (params?) => void;
  }

  interface FormOneProps {
    className?: string;
    formHeader: string;
    data: FormOneData;
    callBack: (params, params?) => void;
  }

  interface FormTwoProps {
    className?: string;
    formHeader: string;
    buttonName: string;
    data: FormTwoData;
    callBack: (params, params?) => void;
  }

  interface GlobalState {
    globalState: object;
    setGlobalState: React.Dispatch<React.SetStateAction<object>>;
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
    className?: string;
    isShow: boolean;
    setIsShow: (show: boolean) => void;
  }

  interface StepTwoProps {
    className?: string;
    formHeader: string;
    stepOneData: FormOneData;
    isCompleted: boolean;
    setIsCompleted: (show: boolean) => void;
  }

  interface Svg {
    className?: string;
  }
}
