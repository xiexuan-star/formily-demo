import { isFunction } from "@vueuse/core";
import { FieldItem } from "../types";

// 将低代码平台中的校验规则转换为JSONSchema
export function useFormValidator() {
  const validateMap = new Map<string, (field: FieldItem) => Record<string, any>>([
    ["mobile", () => ({ format: "phone" })],
    ["integer", () => ({ format: "integer" })],
    ["number", () => ({ format: "number" })],
    [
      "id_card",
      () => ({
        pattern:
          /^\d{6}(((19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}([0-9]|x|X))|(\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}))$/,
        message: "请输入合法的身份证号",
      }),
    ],
    [
      "regular",
      field => {
        const { validate, regular_expression, regular_error_tip } = field;
        const pattern = regular_expression || validate?.regular_expression || "";
        const message = regular_error_tip || validate?.regular_error_tip || "格式错误";

        return { pattern, message };
      },
    ],
  ]);

  const commonValidateConfig = { triggerType: "onBlur" };

  function createValidatorSchema(fieldItem: FieldItem) {
    const rules: AnyObject[] = [];

    const { validate: { vali_obj } = {}, validator } = fieldItem;

    // 自定义规则, 这个字段在低代码配置中没有, 完全是给访问器修改属性用的
    if (validator) {
      const _validator = Array.isArray(validator) ? validator : [validator];
      _validator.forEach(f => {
        if (!isFunction(f)) return;
        rules.push({ validator: (value: any) => f(value, fieldItem) });
      });
    }

    const ruleCreator = vali_obj && validateMap.get(vali_obj);

    ruleCreator && rules.push(Object.assign({}, commonValidateConfig, ruleCreator(fieldItem)));
    return rules;
  }

  return { createValidatorSchema };
}
