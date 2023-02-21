import { DeepPartial } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode
  initState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initState } = props;

  const store = createReduxStore(initState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
