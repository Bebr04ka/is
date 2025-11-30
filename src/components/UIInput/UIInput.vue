<template>
  <input
    :value="props.modelValue"
    :disabled="props.isDisabled"
    :placeholder="props.placeholder"
    :data-disabled="props.isDisabled"
    class="ui-input ui-component"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import type { BaseProps, ValueProps, UpdateValueEvent } from '../types';

interface IProps extends BaseProps, ValueProps {
  placeholder?: string;
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
  placeholder: ''
});

const emit = defineEmits<IEmit>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
.ui-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 14px;
  background-color: var(--color-white);
  color: var(--color-text);
  transition: border-color 0.2s ease;
}

.ui-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.ui-input[data-disabled="true"] {
  background-color: var(--color-disabled);
}

.ui-input::placeholder {
  color: var(--color-text-light);
}
</style>