import { useField } from "@formily/vue";
import { computed } from "vue";

export function useFormField() {
  const field = useField();
  return { field, title: computed(() => field.value.title) };
}
