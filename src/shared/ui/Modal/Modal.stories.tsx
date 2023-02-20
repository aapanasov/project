import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe consequuntur harum nostrum labore rerum magni architecto. Nisi iusto repudiandae totam enim laboriosam. Quod nisi necessitatibus obcaecati, dignissimos odit delectus quaerat?';
export const Primary = Template.bind({});
Primary.args = {
  children: lorem,
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children: lorem,
  isOpen: true,
};
Dark.decotators = [ThemeDecorator(Theme.DARK)];
