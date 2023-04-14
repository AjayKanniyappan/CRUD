import { AUTHOR_URL } from '@constants/index';

/**
 * It returns a footer with a link to my website
 * @returns JSX.Element
 */
function Footer(): JSX.Element {
  return (
    <footer className="bottom-0 px-4">
      <hr className="border-gray-300" />
      <div className="py-6 text-md text-center">
        Made with ❤️ by{' '}
        <a className="cursor-pointer" href={AUTHOR_URL} target="_blank" rel="noreferrer">
          Ajay Kanniyappan
        </a>
      </div>
    </footer>
  );
}

export default Footer;
