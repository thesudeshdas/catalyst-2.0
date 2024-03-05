// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function sanitiseObject(obj: Object): any {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, value]) => value !== undefined && value !== '' && value !== null
    )
  );
}
