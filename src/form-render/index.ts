import type { App } from 'vue';
import script from './src/FormRender.vue';
export * from './src/hooks';
export * from './src/types';

// const FormRender = script as SFCWithInstall<typeof script>;
//
// FormRender.install = function (app: App) {
//   safeComponentRegister(app, FormRender, COMPONENT_NAMESPACE + 'FormRender');
// };

export default script;
