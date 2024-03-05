import { useEffect, useState } from 'react';

interface IUseDebounceProps {
  inputValue: string;
  delay: number;
}

export default function useDebounce({ inputValue, delay }: IUseDebounceProps) {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    if (inputValue && inputValue.trim().length > 0) {
      const handler = setTimeout(() => {
        setDebouncedValue(inputValue);
      }, delay);

      return () => clearTimeout(handler);
    }
  }, [inputValue, delay]);

  return debouncedValue;
}
