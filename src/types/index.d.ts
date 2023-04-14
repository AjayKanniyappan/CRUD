declare namespace CRUD {
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

  interface StepTwo {
    isCompleted: boolean;
    setIsCompleted: (show: boolean) => void;
  }

  interface Svg {
    className?: string;
  }
}
