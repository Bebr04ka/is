<template>
  <button
    :type="props.type"
    :disabled="props.isDisabled"
    :data-layout="props.layout"
    :data-disabled="props.isDisabled"
    class="ui-button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { BaseProps, ClickEvent } from '../types';

interface IProps extends BaseProps {
  layout?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
}

interface IEmit {
  (e: 'click', event: MouseEvent): void;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  isDisabled: false,
  type: 'button'
});

const emit = defineEmits<IEmit>();

const handleClick = (event: MouseEvent) => {
  if (!props.isDisabled) {
    emit('click', event);
  }
};
</script>

<style scoped>
.ui-button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 100px;
}

.ui-button[data-layout="primary"] {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.ui-button[data-layout="primary"]:hover:not([data-disabled="true"]) {
  background-color: var(--color-primary-dark);
}

.ui-button[data-layout="secondary"] {
  background-color: var(--color-secondary);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.ui-button[data-layout="secondary"]:hover:not([data-disabled="true"]) {
  background-color: var(--color-secondary-dark);
}

.ui-button[data-disabled="true"] {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>