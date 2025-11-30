import { Meta, StoryObj } from '@storybook/vue3';
import { html } from '../../helpers';
import UIField from './UIField.vue';
import UIInput from '../UIInput/UIInput.vue';
import UISelect from '../UISelect/UISelect.vue';

const meta: Meta<typeof UIField> = {
  component: UIField,
  args: {},
  argTypes: {
    label: {
      control: 'text'
    }
  },
};

export default meta;

export const WithInput: StoryObj<typeof UIField> = {
  render: (args) => ({
    components: { UIField, UIInput },
    setup: () => ({ args }),
    template: html`
      <UIField v-bind="args">
        <UIInput placeholder="Введите значение" />
      </UIField>
    `,
  }),
  args: {
    label: 'Поле ввода'
  }
};

export const WithSelect: StoryObj<typeof UIField> = {
  render: (args) => ({
    components: { UIField, UISelect },
    setup: () => { 
      const options = ['Россия', 'США', 'Германия', 'Китай'];
      return { args, options };
    },
    template: html`
      <UIField v-bind="args">
        <UISelect :options="options" placeholder="Выберите страну" />
      </UIField>
    `,
  }),
  args: {
    label: 'Выпадающий список'
  }
};