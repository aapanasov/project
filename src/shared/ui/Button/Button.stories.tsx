import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Button, ButtonSize, ButtonVariant } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: ButtonVariant.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  variant: ButtonVariant.CLEAR_INVERTED,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINED,
};

export const OutlinedL = Template.bind({});
OutlinedL.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINED,
  size: ButtonSize.L,
};

export const OutlinedXL = Template.bind({});
OutlinedXL.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINED,
  size: ButtonSize.XL,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
  variant: ButtonVariant.BACKGROUND,
};
export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  children: 'Text',
  variant: ButtonVariant.BACKGROUND_INVERTED,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M,
};
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,

};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINED,
  disabled: true,
};
