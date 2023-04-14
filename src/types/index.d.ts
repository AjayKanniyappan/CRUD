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

  interface Svg {
    className?: string;
  }
}
