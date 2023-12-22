// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getErrorMessage(error: any) {
  return error.message || String(error);
}
