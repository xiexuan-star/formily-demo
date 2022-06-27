type RequestInstance = Record<string, Function>;
let http: null | RequestInstance = null;

// 通过这个hook注册请求实例供FormRender组件消费
export function useFormRequest() {
  function getHttpInstance() {
    return http;
  }

  function registGlobHttpInstance(instance: RequestInstance) {
    http = instance;
  }

  return { getHttpInstance, registGlobHttpInstance };
}
