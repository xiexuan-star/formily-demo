import { AnyObject } from '@/types';
import { InjectAsyncQueue } from '../constants';
import { FormRequestType } from '../types';
import { useFormField } from '../hooks';
import { assignUpdateValue, formRenderLog } from '../utils';
import { isObject } from '@vueuse/core';
import { connect, mapProps } from '@formily/vue';
import { NCascader } from 'naive-ui';
import { computed, defineComponent, inject, PropType, ref, watch } from 'vue';

type UrlConfig = {
  method: FormRequestType;
  nameKey: string;
  dependKey: string;
  url: string;
  valueKey: string;
};

const script = defineComponent({
  name: 'FormCascader',
  props: {
    options: { type: Array as PropType<AnyObject[]>, default: () => [] },
    deep: { type: [Number, String], required: true },
    urlConfig: { type: Object as PropType<UrlConfig> },
  },
  emits: ['update:value'],
  setup(props, { slots, attrs, emit }) {
    const _options = ref<AnyObject[] | null | undefined>(null);
    const { title } = useFormField();
    const asyncQueue = inject(InjectAsyncQueue)!;

    async function fetchData(option?: AnyObject) {
      // 已有_option数据情况下，不再对层级为0的数据发送请求
      if (!option && _options.value) return;
      const config = props.urlConfig;
      if (!config) return;
      if (!isObject(config)) {
        formRenderLog(`invalid urlConfig (${ config }) in CASCADER => ${ title.value }`, 'warn');
        return;
      }

      if (option?.depth + 1 >= props.deep) return;
      const parentDepth = option?.depth ?? -1;

      const params: Record<string, string> = { lvlnr: parentDepth + 1 + '' };
      if (option) {
        if (!props.urlConfig.dependKey) {
          formRenderLog(
            `invalid urlConfig.dependKey ${ props.urlConfig.dependKey } in CASCADER => ${ title.value }`,
            'warn'
          );
          return;
        }
        params[props.urlConfig.dependKey] = option[config.valueKey];
      }

      const data = await asyncQueue.addAsync({
        ...config,
        key: title.value,
        params,
      });
      const result = data.reduce((res: AnyObject[], d) => {
        res.push({
          [config.nameKey]: d[config.nameKey],
          [config.valueKey]: d[config.valueKey],
          depth: parentDepth + 1,
          isLeaf: parentDepth + 2 >= props.deep,
        });
        return res;
      }, []);
      option ? (option.children = result) : (_options.value = result);
    }

    const renderOptions = computed(() => {
      // 优先使用请求所得的option
      return _options.value || props.options || [];
    });

    watch(
      () => attrs.value,
      (n: any, o: any) => {
        if (n != null && o == null) {
          fetchData();
        }
      },
      { immediate: true }
    );

    const labelKey = computed(() => {
      return props.urlConfig?.nameKey ?? 'text';
    });

    const valueKey = computed(() => {
      return props.urlConfig?.valueKey ?? 'value';
    });

    const _attrs = computed(() => {
      return { ...attrs, value: undefined,/*解除formily托管*/onChange: undefined };
    });

    const _value = computed(() => {
      try {
        const parsed = Array.isArray(attrs.value) ? attrs.value : (JSON.parse((attrs.value as string) || ''));
        if (Array.isArray(parsed)) {
          return parsed.map(option => option[labelKey.value]).join(' / ');
        }
      } catch (e: unknown) {
        return '';
      }
    });

    function updateValue(v: any, _: any, options: any[]) {
      const payload = Array.isArray(options) ? options.map(option => ({
        ...option,
        // 此处完全是为了兼容业务方的现有逻辑
        label: option[labelKey.value],
        children: undefined
      })) : options;
      emit('update:value', payload);
    }

    return () => {
      return <>
        <NCascader
          { ..._attrs.value }
          value={ _value.value }
          onUpdate:value={ updateValue }
          remote
          labelField={ labelKey.value }
          valueField={ valueKey.value }
          options={ renderOptions.value }
          checkStrategy="child"
          onLoad={ fetchData }
          onUpdate:show={ show => show && fetchData() }
          v-slots={ slots }
        />
      </>;
    }
      ;
  },
});

export const SEARCH_CASCADE = connect(
  script,
  mapProps({ dataSource: 'options' }, assignUpdateValue));
