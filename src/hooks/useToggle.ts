import { useState } from 'react';

export function useToggle(initialValue = true): [boolean, (newValue?: any) => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const handleSetValue = (newValue?: any) => {
    if (typeof newValue === 'boolean') {
      setValue(newValue);

      return;
    }

    setValue((flag) => !flag);
  };

  return [value, handleSetValue];
}
