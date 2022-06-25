import { InjectAsyncQueue } from "../../constants";
import { FormRequestType } from "../../types";
import { useFormField } from "../../hooks";
import { formRenderLog } from "../../utils";
import { isObject } from "@vueuse/core";
import { connect, mapProps } from "@formily/vue";
import { NCascader } from "naive-ui";
import { computed, defineComponent, inject, PropType, ref, watch } from "vue";

type UrlConfig = {
  method: FormRequestType;
  nameKey: string;
  dependKey: string;
  url: string;
  valueKey: string;
};

const script = defineComponent({
  name: "FormCascader",
  props: {
    options: { type: Array as PropType<Record<string, any>[]>, default: () => [] },
    deep: { type: [Number, String], required: true },
    urlConfig: { type: Object as PropType<UrlConfig> },
  },
  setup(props, { slots, attrs }) {
    const _options = ref<Record<string, any>[] | null | undefined>(null);
    const { title } = useFormField();
    const asyncQueue = inject(InjectAsyncQueue)!;

    async function fetchData(option?: Record<string, any>) {
      // 已有_option数据情况下，不再对层级为0的数据发送请求
      if (!option && _options.value) return;
      const config = props.urlConfig;
      if (!config || !isObject(config)) {
        formRenderLog(`invalid urlConfig (${config}) in CASCADER => ${title.value}`, "warn");
        return;
      }

      if (option?.depth + 1 >= props.deep) return;
      const parentDepth = option?.depth ?? -1;

      const params: Record<string, string> = { lvlnr: parentDepth + 1 + "" };
      if (option) {
        if (!props.urlConfig.dependKey) {
          formRenderLog(
            `invalid urlConfig.dependKey ${props.urlConfig.dependKey} in CASCADER => ${title.value}`,
            "warn"
          );
          return;
        }
        params[props.urlConfig.dependKey] = option.value;
      }

      const data = await asyncQueue.addAsync({
        ...config,
        key: title.value,
        params,
      });
      const result = data.reduce((res: Record<string, any>[], d) => {
        res.push({
          label: d[config.nameKey],
          value: d[config.valueKey],
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

    return () => (
      <NCascader
        {...attrs}
        remote
        options={renderOptions.value}
        checkStrategy="child"
        onLoad={fetchData}
        onUpdate:show={show => show && fetchData()}
        v-slots={slots}
      />
    );
  },
});

export const SEARCH_CASCADE = connect(
  script,
  mapProps({ dataSource: "options" }, (props, field: any) => {
    return { ...props, "onUpdate:value": field.onChange };
  })
);
