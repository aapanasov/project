import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('render button', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('render button with clear class', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    screen.debug();
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
