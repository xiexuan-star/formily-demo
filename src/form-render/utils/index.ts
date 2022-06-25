export function formRenderLog(message: string, type: keyof Console = "log") {
  console[type as "log"](`[FormRender]: ${message}`);
}
