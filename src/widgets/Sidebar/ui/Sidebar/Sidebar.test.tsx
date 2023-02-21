import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '../../../../shared/lib/tests/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render sidebar', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('sidebar toggle', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    const sideBar = screen.getByTestId('sidebar');
    expect(sideBar).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(sideBar).toHaveClass('collapsed');
  });
});
