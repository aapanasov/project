import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from '../i18n/i18nForTest';

export const TranslationDecorator = (StoryComponent: Story) => (
  <I18nextProvider i18n={i18nForTest}>
    <StoryComponent />
  </I18nextProvider>
);
