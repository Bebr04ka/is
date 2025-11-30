import { Meta, StoryObj } from '@storybook/vue3';
import { html } from '../../helpers';
import UIButton from './UIButton.vue';

const meta: Meta<typeof UIButton> = {
  component: UIButton,
  args: {},
  argTypes: {
    layout: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    },
    isDisabled: {
      control: { type: 'boolean' }
    },
    type: {
      options: ['button', 'submit'],
      control: { type: 'select' }
    }
  },
};

export default meta;

export const Primary: StoryObj<typeof UIButton> = {
  render: (args) => ({
    components: { UIButton },
    setup: () => ({ args }),
    template: html`<UIButton v-bind="args">Текст</UIButton>`,
  }),
  args: {
    layout: 'primary',
    isDisabled: false,
    type: 'button'
  }
};

export const Secondary: StoryObj<typeof UIButton> = {
  render: (args) => ({
    components: { UIButton },
    setup: () => ({ args }),
    template: html`<UIButton v-bind="args">Текст</UIButton>`,
  }),
  args: {
    layout: 'secondary',
    isDisabled: false
  }
};

export const Disabled: StoryObj<typeof UIButton> = {
  render: (args) => ({
    components: { UIButton },
    setup: () => ({ args }),
    template: html`<UIButton v-bind="args">Неактивная кнопка</UIButton>`,
  }),
  args: {
    isDisabled: true
  }
};