import { fireEvent, screen } from '@testing-library/react';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render sidebar', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('sidebar toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    const sideBar = screen.getByTestId('sidebar');
    expect(sideBar).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(sideBar).toHaveClass('collapsed');
  });
});
