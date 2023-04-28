import { createContext, useContext, useMemo, useState } from 'react';
import { AddButton, Card } from '@components/index';

const GlobalStateContext = createContext<CRUD.GlobalState>({
  globalState: {},
  setGlobalState: () => {},
});

/**
 * The Home function returns a JSX element that provides a global state context and renders a Card
 * component and an AddButton component.
 * @returns The `Home` component is being returned, which contains a `GlobalStateContext.Provider`
 * component that provides a `value` prop with the `globalState` and `setGlobalState` variables wrapped
 * in a `useMemo` hook. The `Card` component is also being rendered within a `div` element with a class
 * of `grid min-h-screen place-items-center`, and an `Add
 */
function Home(): JSX.Element {
  const [globalState, setGlobalState] = useState({});
  const state = useMemo(() => ({ globalState, setGlobalState }), [globalState]);

  return (
    <GlobalStateContext.Provider value={state}>
      <div>
        <Card />
      </div>
      <AddButton />
    </GlobalStateContext.Provider>
  );
}

export const useGlobalState = () => useContext(GlobalStateContext);
export default Home;
