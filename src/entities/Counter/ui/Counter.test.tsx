import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
  test('render counter', () => {
    componentRender(<Counter />, {
      initState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
    componentRender(<Counter />, {
      initState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('inc-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    componentRender(<Counter />, {
      initState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('dec-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
