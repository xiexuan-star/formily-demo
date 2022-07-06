import { formRenderLog } from "../utils";

export function useCommonLog() {
  function invalidHttpInstanceLog() {
    formRenderLog(
      `before use http feature, you should regist http instance by useFormilyRequest.registGlobHttpInstance()`,
      "warn"
    );
  }
  return { invalidHttpInstanceLog };
}
