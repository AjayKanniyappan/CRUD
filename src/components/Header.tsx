import { AvatarSvg, LogoSvg } from '@svg/index';

/**
 * It returns a header element with a logo
 * @returns A JSX element
 */
function Header(): JSX.Element {
  return (
    <header className="rounded-xl shadow-md m-4 bottom-2 border-[1px] border-gray-300">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex">
        <LogoSvg className="w-8 h-8 sm:w-10 sm:h-10" />
        <h2 className="mx-4 py-1 md:py-2 font-semibold text-center text-md">CRUD Demo</h2>
        <div className="ml-auto rounded-full bg-gray-200 p-2 md:p-3">
          <AvatarSvg className="w-4 h-4 rounded-full" />
        </div>
      </div>
    </header>
  );
}

export default Header;
