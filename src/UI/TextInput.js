import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';
import Typography from './Typography';
function TextInput({
  textType,
  type,
  label,
  inputClassName,
  className,
  value,
  setValue,
  leftIcon: Icon,
  ...props
}) {
  const id = useMemo(() => nanoid(), []);
  switch (textType) {
    case 'primary': {
      return (
        <div className={`flex flex-col ${className}`}>
          {label && (
            <label className="text-gray-600 mb-px" htmlFor={id}>
              <Typography type="title">{label}</Typography>
            </label>
          )}

          {Icon ? (
            <div className="flex items-center overflow-hidden  bg-gray-200 rounded-md text-gray-500">
              <input
                {...props}
                id={id}
                className={`bg-transparent  w-full p-3 pr-0 text-base  focus:outline-none   ${inputClassName}`}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              {Icon ? <Icon /> : null}
            </div>
          ) : (
            <input
              {...props}
              id={id}
              className={`bg-gray-200 w-full p-3 text-base rounded-md focus:outline-none  text-gray-500   ${inputClassName}`}
              type={type}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          )}
        </div>
      );
    }
    default: {
      return (
        <div className={`flex flex-col ${className}`}>
          {label && (
            <label className="text-gray-600" htmlFor={id}>
              <Typography type="title">{label}</Typography>
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
