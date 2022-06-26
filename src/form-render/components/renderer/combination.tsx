import { formRenderLog } from "../../utils";
import { ISchema } from "@formily/json-schema/esm/types";
import { connect, mapProps } from "@formily/vue";
import { isObject } from "@vueuse/core";
import { NButton } from "naive-ui";
import { computed, defineComponent, PropType, ref } from "vue";
import FormRender from "../../formRender.vue";

const script = defineComponent({
  name: "FormCombination",
  props: {
    title: { type: String, default: "" },
    value: { type: String },
    properties: { type: Object as PropType<Record<string, ISchema>>, required: true },
  },
  setup(props, { emit }) {
    const _schema = computed<ISchema>(() => {
      return {
        type: "void",
        properties: props.properties,
      };
    });

    const combinationRepeat = ref(1);
    function add() {
      combinationRepeat.value++;
      _values.value.push({});
    }
    function remove(idx: number) {
      combinationRepeat.value--;
      _values.value.splice(idx, 1);
    }

    const _values = ref<AnyObject[]>([]);

    function initValues(data?: string) {
      if (!data) return;
      try {
        const parsed = JSON.parse(data);
        if (!Array.isArray(parsed)) throw new Error();
        parsed.forEach((v: unknown, idx) => {
          if (isObject(v)) {
            _values.value[idx] = v;
          } else {
            _values.value[idx] = {};
            formRenderLog(
              `invalid Object value ${v} in COMBINATION => ${props.title}[${idx}]`,
              "warn"
            );
          }
        });
      } catch {
        formRenderLog(`invalid JSON value ${data} in COMBINATION => ${props.title}`, "warn");
      }
    }

    initValues(props.value);

    return () => {
      return (
        <section class="formily-render__combination">
          <header class="formily-render__combinationHeader">
            {props.title}
            <NButton onClick={add} type="info" text>
              新增
            </NButton>
          </header>
          {Array.from({ length: combinationRepeat.value }).map((_, idx) => {
            return (
              <section class="formily-render__combinationContent">
                <FormRender schema={_schema.value} />
                {idx !== 0 ? (
                  <i class="formily-render__combinationClose" onClick={() => remove(idx)}>
                    {"-"}
                  </i>
                ) : null}
              </section>
            );
          })}
        </section>
      );
    };
  },
});

export const COMBINATION = connect(
  script,
  mapProps((props, field: any) => {
    return { ...props, "onUpdate:value": field.onInput };
  })
);
