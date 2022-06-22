import { connect, mapProps } from '@formily/vue';
import { NCollapseTransition } from 'naive-ui';
import { defineComponent, h, ref } from 'vue';

const script = defineComponent({
  name: 'FormilyCollapse',
  props: {
    show: { type: Boolean, default: true },
    title: { type: String, default: '' },
  },
  setup(props, { slots }) {
    const _show = ref(props.show);

    function toggleShow() {
      _show.value = !_show.value;
    }

    return () => {
      return <section class="formily-render__collapse">
        <header class="formily-render__collapseHeader" onClick={ toggleShow }>{ props.title }</header>
        <NCollapseTransition class="formily-render__collapseItem" show={ _show.value } v-slots={ slots }/>
      </section>;
    };
  },
});

export const COLLAPSE = connect(
  script,
  mapProps((props, field: any) => {
    return { ...props, title: field.title };
  })
);
