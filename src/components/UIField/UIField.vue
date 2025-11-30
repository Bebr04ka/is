<template>
  <div class="ui-field">
    <label v-if="props.label" class="ui-field__label">
      {{ props.label }}
    </label>
    <div class="ui-field__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  label?: string;
}

const props = defineProps<IProps>();
</script>

<style scoped>
.ui-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ui-field__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
}

.ui-field__content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>