import { createContext, useContext, useMemo, useState } from 'react';
import { AddButton, Card } from '@components/index';

interface GlobalState {
  globalState: object;
  setGlobalState: React.Dispatch<React.SetStateAction<object>>;
}

const GlobalStateContext = createContext<GlobalState>({
  globalState: {},
  setGlobalState: () => {},
});

export const useGlobalState = () => useContext(GlobalStateContext);

function Home(): JSX.Element {
  const [globalState, setGlobalState] = useState({});

  const value = useMemo(() => ({ globalState, setGlobalState }), [globalState]);

  return (
    <GlobalStateContext.Provider value={value}>
      <div className="grid h-screen place-items-center">
        <Card />
      </div>
      <AddButton />
    </GlobalStateContext.Provider>
  );
}

export default Home;
