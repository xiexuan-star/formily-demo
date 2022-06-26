type RequestInstance = Record<string, Function>;
let http: null | RequestInstance = null;

export function useFormRequest() {
  function getHttpInstance() {
    return http;
  }

  function registGlobHttpInstance(instance: RequestInstance) {
    http = instance;
  }

  return { getHttpInstance, registGlobHttpInstance };
}
