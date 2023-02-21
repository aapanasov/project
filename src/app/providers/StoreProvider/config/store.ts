import { configureStore } from '@reduxjs/toolkit';
import { counterReducers } from '../../../../entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initState: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducers,
    },
    devTools: IS_DEV,
    preloadedState: initState,
  });
}
