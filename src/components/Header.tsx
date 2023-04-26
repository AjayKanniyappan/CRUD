import { AvatarSvg, LogoSvg } from '@svg/index';
import '@styles/Header.css';

/**
 * It returns a header element with a logo
 * @returns A JSX element
 */
function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="div-container">
        <LogoSvg className="h-8 w-8 sm:h-10 sm:w-10" />
        <h2 className="heading">CRUD Demo</h2>
        <div className="avatar-container">
          <AvatarSvg className="h-4 w-4 rounded-full" />
        </div>
      </div>
    </header>
  );
}

export default Header;
