import { connect, mapProps } from "@formily/vue";
import { NCollapseTransition } from "naive-ui";
import { defineComponent, onMounted, ref } from "vue";

const script = defineComponent({
  name: "FormCollapse",
  props: {
    show: { type: Boolean, default: true },
    title: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    const _show = ref(false);

    onMounted(() => {
      _show.value = props.show;
    });

    function toggleShow() {
      if (props.disabled) return;
      _show.value = !_show.value;
    }

    return () => {
      return (
        <section class="formily-render__collapse">
          <header class="formily-render__collapseHeader" onClick={toggleShow}>
            {props.title}
          </header>
          <NCollapseTransition
            class="formily-render__collapseItem"
            show={_show.value}
            v-slots={slots}
            appear={false}
          />
        </section>
      );
    };
  },
});

export const COLLAPSE = connect(
  script,
  mapProps((props, field) => {
    return { ...props, title: field.title };
  })
);
