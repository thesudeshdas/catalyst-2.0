// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function objectToFormData(obj: Record<string, any>): FormData {
  const formData = new FormData();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function appendFormData(data: Record<string, any>, parentKey?: string) {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = data[key];
        const propName = parentKey ? `${parentKey}[${key}]` : key;

        if (value instanceof File || value instanceof Blob) {
          formData.append(propName, value);
        } else if (typeof value === 'object' && value !== null) {
          appendFormData(value, propName);
        } else {
          formData.append(propName, value);
        }
      }
    }
  }

  appendFormData(obj);

  return formData;
}
