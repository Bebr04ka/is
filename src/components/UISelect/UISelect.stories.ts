import { Meta, StoryObj } from '@storybook/vue3';
import { html } from '../../helpers';
import UISelect from './UISelect.vue';

const meta: Meta<typeof UISelect> = {
  component: UISelect,
  args: {},
  argTypes: {
    modelValue: {
      control: 'text'
    },
    isDisabled: {
      control: 'boolean'
    },
    options: {
      control: 'object'
    }
  },
};

export default meta;

export const Default: StoryObj<typeof UISelect> = {
  render: (args) => ({
    components: { UISelect },
    setup: () => ({ args }),
    template: html`<UISelect v-bind="args" />`,
  }),
  args: {
    options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
    placeholder: 'Выберите вариант'
  }
};

export const WithSelection: StoryObj<typeof UISelect> = {
  render: (args) => ({
    components: { UISelect },
    setup: () => ({ args }),
    template: html`<UISelect v-bind="args" />`,
  }),
  args: {
    modelValue: 'Вариант 2',
    options: ['Вариант 1', 'Вариант 2', 'Вариант 3']
  }
};

export const Disabled: StoryObj<typeof UISelect> = {
  render: (args) => ({
    components: { UISelect },
    setup: () => ({ args }),
    template: html`<UISelect v-bind="args" />`,
  }),
  args: {
    isDisabled: true,
    options: ['Вариант 1', 'Вариант 2', 'Вариант 3']
  }
};