import { useState } from 'react';

export function useToggle(initialValue = true): [boolean, (newValue?: boolean) => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const handleSetValue = (newValue?: boolean) => {
    if (typeof newValue !== 'undefined') {
      setValue(newValue);

      return;
    }

    setValue((flag) => !flag);
  };

  return [value, handleSetValue];
}
