import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';
function TextInput({
  textType,
  type,
  label,
  inputClassName,
  className,
  value,
  setValue,
  ...props
}) {
  const id = useMemo(() => nanoid(), []);
  switch (textType) {
    case 'primary': {
      return (
        <div className={`flex flex-col ${className}`}>
          {label && (
            <label className='text-base text-gray-600 font-medium' htmlFor={id}>
              {label}
            </label>
          )}
          <input
            {...props}
            id={id}
            className={`bg-gray-100 w-full p-2 text-sm rounded focus:outline-none font-normal text-gray-500   ${inputClassName}`}
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      );
    }
    default: {
      return (
        <div className={`flex flex-col ${className}`}>
          {label && (
            <label className='text-base text-gray-600 font-medium' htmlFor={id}>
              {label}
            </label>
          )}
          <input
            {...props}
            id={id}
            className={`bg-gray-100 w-full p-2 text-sm rounded outline-none text-gray-700   ${inputClassName}`}
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      );
    }
  }
}

export default TextInput;
