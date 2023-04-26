declare namespace CRUD {
  type Headers = Readonly<Record<string, string | boolean>>;
  type Url = string;

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
    stepOneData: StepOneData;
    isCompleted: boolean;
    setIsCompleted: (show: boolean) => void;
  }

  interface Svg {
    className?: string;
  }
}
