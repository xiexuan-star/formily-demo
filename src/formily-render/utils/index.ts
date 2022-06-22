export function log(message: string, type: keyof Console = 'log') {
  console[type as 'log'](`[FormilyRender]: ${ message }`);
}
