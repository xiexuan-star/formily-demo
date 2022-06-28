import { isVoidField } from '@formily/core';
import { connect, mapProps } from '@formily/vue';
import { NFormItem } from 'naive-ui';
import { createCommentVNode, defineComponent, onMounted, ref, watch } from 'vue';
import { useElementVisibility } from '@vueuse/core';

// const script = defineComponent({
//   name: 'FormRenderItem',
//   setup(_, { attrs, slots }) {
//     const wrapperInstance = ref<any>();
//     const wrapperRef = ref<HTMLElement>();
//     const visible = useElementVisibility(wrapperRef);
//     const _visible = ref(false);
//     watch(visible, v => {
//       if (!v) return;
//       !_visible.value && console.log('render=>', attrs.label);
//       _visible.value = true;
//     });
//     onMounted(async () => {
//       if (wrapperInstance.value?.$el) {
//         wrapperRef.value = wrapperInstance.value.$el;
//       }
//     });
//     return () => {
//       return <NFormItem ref={ wrapperInstance } { ...attrs } v-slots={ {
//         ...slots,
//         default(defaultAttrs: any) {
//           return _visible.value ? slots.default?.(defaultAttrs) : createCommentVNode('v-if__formItem');
//         }
//       } }/>;
//     };
//   }
// });

export const FORM_ITEM = connect(
  NFormItem,
  mapProps({ title: 'label' }, (props, field: any) => {
    console.log('render',field.title)
    const feedback = !isVoidField(field)
      ? field.selfErrors.length
        ? field.selfErrors.join(',')
        : undefined
      : undefined;
    return {
      ...props,
      required: field.required,
      class: 'formily-render__formItem',
      style: { '--form-item-column': props.span ?? 3 },
      feedback,
      'validation-status': feedback ? 'error' : undefined,
    };
  })
);
