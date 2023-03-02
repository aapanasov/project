import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
// TODO: fix abs import for jest
import { userReducers } from '../../../../entities/User';
import { counterReducers } from '../../../../entities/Counter';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initState: StateSchema,
  asyncReducers: ReducersMapObject<StateSchema>,
) {
  const roorReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducers,
    user: userReducers,
  };

  const reducerManager = createReducerManager(roorReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initState,
  });

  // TODO: fix
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
