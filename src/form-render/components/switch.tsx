import { NSwitch } from "naive-ui";
import { assignUpdateValue } from "../utils";
import { connect, mapProps } from "@formily/vue";
import { defineComponent } from "vue";

const script = defineComponent({
  name: "FormSwitch",
  setup(props, { attrs }) {
    return () => {

      return <NSwitch {...attrs} />;
    };
  },
});

export const SWITCH = connect(script, mapProps(assignUpdateValue));
