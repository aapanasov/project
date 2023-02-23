import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducers } from 'entities/User';
import { counterReducers } from '../../../../entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initState: StateSchema) {
  const roorReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducers,
    user: userReducers,
  };

  return configureStore<StateSchema>({
    reducer: roorReducer,
    devTools: IS_DEV,
    preloadedState: initState,
  });
}
