import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducers } from 'features/AuthByUsername';
// TODO: fix abs import for jest
import { userReducers } from '../../../../entities/User';
import { counterReducers } from '../../../../entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initState: StateSchema) {
  const roorReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducers,
    user: userReducers,
    loginForm: loginReducers,
  };

  return configureStore<StateSchema>({
    reducer: roorReducer,
    devTools: IS_DEV,
    preloadedState: initState,
  });
}
