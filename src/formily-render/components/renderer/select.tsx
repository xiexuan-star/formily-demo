import { useFormilyRequest } from '../../hooks';
import { connect, mapProps } from '@formily/vue';
import { NSelect } from 'naive-ui';
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref,
  watch,
} from 'vue';

type UrlConfig = {
  method: string;
  nameKey: string;
  url: string;
  valueKey: string;
};

const script = defineComponent({
  name: 'FormilySelect',
  props: {
    options: { type: Array as PropType<Record<string, any>[]>, default: () => [] },
    urlConfig: { type: Object as PropType<UrlConfig> },
  },
  setup(props, { slots, attrs }) {
    const _options = ref<Record<string, any>[] | null>(null);
    const { getHttpInstance } = useFormilyRequest();

    async function fetchData(config?: UrlConfig) {
      const http = getHttpInstance();
      if (!http || !config) return (_options.value = null);
      const { data, success } = await http[config.method](config.url);
      if (success) {
        _options.value = data.map((d: Record<string, any>) => {
          return { label: d[config.nameKey], value: d[config.valueKey] };
        });
      } else {
        _options.value = null;
      }
    }

    watch(() => props.urlConfig, fetchData, { deep: true });

    const renderOptions = computed(() => {
      return _options.value || props.options;
    });

    onMounted(fetchData);

    return () => <NSelect { ...attrs } options={ renderOptions.value } v-slots={ slots }/>;
  },
});

export const SELECT = connect(
  script,
  mapProps({ dataSource: 'options' }, (props, field: any) => {
    return { ...props, 'onUpdate:value': field.onChange };
  })
);
