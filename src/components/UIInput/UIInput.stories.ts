import { Meta, StoryObj } from '@storybook/vue3';
import { html } from '../../helpers';
import UIInput from './UIInput.vue';

const meta: Meta<typeof UIInput> = {
  component: UIInput,
  args: {},
  argTypes: {
    modelValue: {
      control: 'text'
    },
    isDisabled: {
      control: 'boolean'
    },
    placeholder: {
      control: 'text'
    }
  },
};

export default meta;

export const Default: StoryObj<typeof UIInput> = {
  render: (args) => ({
    components: { UIInput },
    setup: () => ({ args }),
    template: html`<UIInput v-bind="args" />`,
  }),
  args: {
    placeholder: 'Введите текст...'
  }
};

export const WithValue: StoryObj<typeof UIInput> = {
  render: (args) => ({
    components: { UIInput },
    setup: () => ({ args }),
    template: html`<UIInput v-bind="args" />`,
  }),
  args: {
    modelValue: 'Привет мир'
  }
};

export const Disabled: StoryObj<typeof UIInput> = {
  render: (args) => ({
    components: { UIInput },
    setup: () => ({ args }),
    template: html`<UIInput v-bind="args" />`,
  }),
  args: {
    modelValue: 'Неактивное поле',
    isDisabled: true
  }
};