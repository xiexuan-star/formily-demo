import { connect, mapProps } from "@formily/vue";
import { defineComponent } from "vue";

const script = defineComponent({
  name: "FormLabel",
  setup(props) {
    return () => {
      return "";
    };
  },
});
export const LABEL = connect(
  script,
  mapProps((props, field) => {
    return { ...props };
  })
);
