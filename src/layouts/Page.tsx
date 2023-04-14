import { Footer, Header } from '@components/index';

/**
 * It's a React component that renders a page with a header, footer, and bottom navigation
 * @param  - title - The title of the page.
 * @returns A React component that renders a header, footer, and main content.
 */
function Page({ className, children }: CRUD.PageProps): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <article className={className}>{children}</article>
      </main>
      <Footer />
    </>
  );
}

export default Page;
