export interface BaseProps {
  isDisabled?: boolean;
}

export interface ValueProps<T = string> {
  modelValue: T;
}

export interface OptionProps {
  options: string[];
  placeholder?: string;
}

// Event types
export type UpdateValueEvent<T = string> = (value: T) => void;
export type ClickEvent = (event: MouseEvent) => void;