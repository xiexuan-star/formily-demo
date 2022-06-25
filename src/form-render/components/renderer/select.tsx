import { InjectAsyncQueue } from "@/modules/clidoctor/view/workstation/patientInfo/form-render/constants";
import { useFormField } from "@/modules/clidoctor/view/workstation/patientInfo/form-render/hooks/useFormField";
import { FormRequestType } from "@/modules/clidoctor/view/workstation/patientInfo/form-render/types";
import { formRenderLog } from "@/modules/clidoctor/view/workstation/patientInfo/form-render/utils";
import { isObject } from "@vueuse/core";
import { connect, mapProps } from "@formily/vue";
import { NSelect } from "naive-ui";
import { computed, defineComponent, inject, onMounted, PropType, ref, watch } from "vue";

type UrlConfig = {
  method: FormRequestType;
  nameKey: string;
  url: string;
  valueKey: string;
};

const script = defineComponent({
  name: "FormSelect",
  props: {
    options: { type: Array as PropType<Record<string, any>[]>, default: () => [] },
    urlConfig: { type: Object as PropType<UrlConfig> },
  },
  setup(props, { slots, attrs }) {
    const _options = ref<Record<string, any>[] | null>(null);
    let cachedOptions: Record<string, any>[] | null = null;
    let lastSearch: string | undefined;

    const asyncQueue = inject(InjectAsyncQueue)!;

    const { title } = useFormField();

    async function fetchData(content?: string) {
      // content未变化或者已有option缓存情况下不发请求
      if (content === lastSearch && cachedOptions) return;
      lastSearch = content;

      const config = props.urlConfig;
      if (!config || !isObject(config)) {
        formRenderLog(`invalid urlConfig (${config}) in SELECT => ${title.value}`, "warn");
        return (cachedOptions = _options.value = null);
      }

      if (cachedOptions) {
        // TODO 根据拼音检索
        return (_options.value = cachedOptions.filter(option => {
          return !content || option.label?.includes(content);
        }));
      }

      try {
        const data = await asyncQueue.addAsync({ ...config, key: title.value });

        _options.value = data.reduce((res: Record<string, any>[], d) => {
          if (d[config.nameKey]?.includes(content) || !content) {
            res.push({ label: d[config.nameKey], value: d[config.valueKey] });
          }
          return res;
        }, []);
        cachedOptions = _options.value;
      } catch {
        _options.value = null;
      }
    }

    const renderOptions = computed(() => {
      return _options.value || props.options || [];
    });

    watch(
      () => props.urlConfig,
      () => {
        cachedOptions = null;
      }
    );

    watch(
      () => attrs.value,
      (n, o) => {
        if (o == null && n != null) {
          fetchData();
        }
      },
      { immediate: true }
    );

    return () => (
      <NSelect
        {...attrs}
        remote
        filterable
        onSearch={fetchData}
        onUpdate:show={show => show && fetchData()}
        options={renderOptions.value}
        v-slots={slots}
      />
    );
  },
});

export const SELECT = connect(
  script,
  mapProps({ dataSource: "options" }, (props, field: any) => {
    return { ...props, "onUpdate:value": field.onChange };
  })
);