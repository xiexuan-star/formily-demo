import { AnyObject } from '@/types';
import { assignUpdateValue, formRenderLog } from "../utils";
import { ISchema } from "@formily/json-schema/esm/types";
import { connect, mapProps } from "@formily/vue";
import { isObject, useDebounceFn } from "@vueuse/core";
import { NButton } from "naive-ui";
import { computed, defineComponent, PropType, ref, toRaw } from "vue";
import FormRender from "../FormRender.vue";

const script = defineComponent({
  name: "FormCombination",
  props: {
    title: { type: String, default: "" },
    value: { type: String },
    properties: { type: Object as PropType<Record<string, ISchema>>, required: true },
  },
  emits: ["update:value"],
  setup(props, { emit }) {
    const _schema = computed<ISchema>(() => {
      return {
        type: "void",
        properties: props.properties,
      };
    });

    const emitChange = useDebounceFn(function emitChange() {
      emit("update:value", JSON.stringify(_values.value));
    }, 300);

    const combinationRepeat = ref(1);

    function add() {
      combinationRepeat.value++;
      _values.value.push({});
      emitChange();
    }

    function remove(idx: number) {
      combinationRepeat.value--;
      _values.value.splice(idx, 1);
      emitChange();
    }

    const _values = ref<AnyObject[]>([{}]);

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
        combinationRepeat.value = _values.value.length;
      } catch {
        formRenderLog(`invalid JSON value ${data} in COMBINATION => ${props.title}`, "warn");
      }
    }

    initValues(props.value);

    function stop(event: Event) {
      event.stopPropagation();
    }

    function onChange(idx: number, { fieldKey, value }: any) {
      !_values.value[idx] && (_values.value[idx] = {});
      _values.value[idx][fieldKey] = value;
      emitChange();
    }

    const FormRenderComponent = FormRender as any;

    return () => {
      return (
        <section class="form-render__combination">
          <header class="form-render__combinationHeader">
            <div class="form-render__combinationHeaderText">{props.title}</div>
            <NButton onClick={add} type="info" text>
              {" "}
              新增{" "}
            </NButton>
          </header>
          {Array.from({ length: combinationRepeat.value }).map((_, idx) => {
            return (
              <section class="form-render__combinationContent">
                <FormRenderComponent
                  initialData={toRaw(_values.value[idx]) || {}}
                  schema={_schema.value}
                  onUpdateValue={() => false}
                  onInput={stop}
                  onBlur={stop}
                  onChange={stop}
                  onFormChange={(payload: any) => onChange(idx, payload)}
                />
                {idx !== 0 ? (
                  <i class="form-render__combinationClose" onClick={() => remove(idx)}>
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

export const COMBINATION = connect(script, mapProps(assignUpdateValue));
