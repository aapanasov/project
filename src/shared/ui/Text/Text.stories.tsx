import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Text, TextVariant } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Text title',
  text: 'Text content',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Text title',
  text: 'Text content',
  variant: TextVariant.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Text title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Text content',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Text title',
  text: 'Text content',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
