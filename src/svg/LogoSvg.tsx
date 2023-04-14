/**
 * It returns a React component that renders an SVG
 * @param  - `className` - the class name to apply to the SVG element.
 * @returns A JSX element.
 */
export default function LogoSvg({ className }: CRUD.Svg): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <circle style={{ fill: '#4AB8A1' }} cx="256" cy="256" r="256" />
        <path
          style={{ fill: '#1E2C33' }}
          d="M76,304V128.364c0-5,3.22-8.364,8-8.364h328c4.784,0,8,3.36,8,8.364V304H76z"
        />
        <path
          style={{ fill: '#F5F5F5' }}
          d="M76,304v32c0,4.78,3.22,8,8,8h328c4.784,0,8-3.22,8-8v-32H76z"
        />
        <rect x="92" y="140" style={{ fill: '#586874' }} width="312" height="148" />
        <rect x="204" y="344" style={{ fill: '#E6E6E6' }} width="88" height="36" />
        <path
          style={{ fill: '#F5F5F5' }}
          d="M320,388c0-4.4-3.6-8-8-8H184c-4.4,0-8,3.6-8,8l0,0c0,4.4,3.6,8,8,8h128C316.4,396,320,392.4,320,388 L320,388z"
        />
        <circle style={{ fill: '#1E2C33' }} cx="248" cy="324" r="8" />
        <path
          style={{ fill: '#E6E6E6' }}
          d="M436,388c0,4-4,8-8,8h-80c-4,0-8-2.4-8-7.6V248c0-4,4-8,8-8h80c4,0,8,4,8,8V388z"
        />
        <rect x="344" y="256" style={{ fill: '#1E2C33' }} width="88" height="116" />
        <rect x="348" y="260" style={{ fill: '#586874' }} width="80" height="108" />
        <g>
          <circle style={{ fill: '#263740' }} cx="388" cy="244" r="2" />
          <path
            style={{ fill: '#263740' }}
            d="M398.32,252h-20.54c-0.984,0-1.78-1.008-1.78-2c0-0.984,0.796-2,1.78-2h20.54 c0.988,0,1.78,1.016,1.78,2C400.1,250.992,399.308,252,398.32,252z"
          />
          <path
            style={{ fill: '#263740' }}
            d="M387.996,376c-4.412,0-7.992,3.584-7.992,8c0,4.408,3.584,8,7.992,8c4.416,0,8.008-3.592,8.008-8 C396.004,379.584,392.416,376,387.996,376z"
          />
        </g>
        <g>
          <path
            style={{ fill: '#E6E6E6' }}
            d="M340,268c-2.212,0-4-1.788-4-4v-8c0-2.212,1.788-4,4-4s4,1.788,4,4v8 C344,266.212,342.212,268,340,268z"
          />
          <path
            style={{ fill: '#E6E6E6' }}
            d="M340,288c-2.212,0-4-1.788-4-4v-4c0-2.212,1.788-4,4-4s4,1.788,4,4v4 C344,286.212,342.212,288,340,288z"
          />
          <path
            style={{ fill: '#E6E6E6' }}
            d="M340,304c-2.212,0-4-1.788-4-4v-4c0-2.212,1.788-4,4-4s4,1.788,4,4v4 C344,302.212,342.212,304,340,304z"
          />
          <path
            style={{ fill: '#E6E6E6' }}
            d="M420,244h-4c-2.212,0-4-1.788-4-4s1.788-4,4-4h4c2.212,0,4,1.788,4,4S422.212,244,420,244z"
          />
        </g>
      </g>
    </svg>
  );
}
