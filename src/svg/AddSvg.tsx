/**
 * It returns a React component that renders an SVG
 * @param  - `className` - the class name to apply to the SVG element.
 * @returns A JSX element.
 */
export default function AddSvg({ className }: CRUD.Svg): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      className={className}
    >
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>
  );
}
