import { CounterSchema } from '../types/counterSchema';
import { counterReducers, counterActions } from './counterSlice';

describe('counterSlice test', () => {
  test('should decrement value', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducers(state, counterActions.decrement)).toEqual({ value: 9 });
  });

  test('should increment value', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducers(state, counterActions.increment)).toEqual({ value: 11 });
  });

  test('should work with empty state', () => {
    expect(counterReducers(undefined, counterActions.increment)).toEqual({ value: 1 });
  });
});
