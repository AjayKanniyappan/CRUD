import { AddButton } from '@components/index';
import Card from './card/Card';

function Home(): JSX.Element {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <Card />
      </div>
      <AddButton />
    </>
  );
}

export default Home;
