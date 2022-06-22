import { connect, mapProps } from '@formily/vue';
import { NCollapseTransition } from 'naive-ui';
import { defineComponent, h, ref } from 'vue';

const script = defineComponent({
  name: 'FormilyCollapse',
  props: {
    show: { type: Boolean, default: true },
    title: { type: String, default: '' }
  },
  setup(props, { slots }) {
    const _show = ref(props.show);

    function toggleShow() {
      _show.value = !_show.value;
    }

    return () => {
      return h('section', { class: 'formily-render__collapse' }, [
        h('header', { onClick: toggleShow }, props.title),
        h(NCollapseTransition, { show: _show.value, class: 'formily-render__collapse__item' }, slots)
      ]);
    };
  }
});

export const COLLAPSE = connect(
  script,
  mapProps((props, field: any) => {
    return { ...props };
  })
);
