import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTest';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface ComponentRenderOptions {
  route?: string
  initState?: DeepPartial<StateSchema>
}

export function componentRender(
  component: ReactNode,
  options: ComponentRenderOptions = {},
) {
  const { route = '/', initState } = options;
  return render(
    <StoreProvider initState={initState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}
