import React from 'react';

function Typography({ type, children, className, ...props }) {
  switch (type) {
    case 'primary': {
      return (
        <h1 {...props} className={`${className} text-3xl font-bold`}>
          {children}
        </h1>
      );
    }

    case 'secondary': {
      return (
        <h2 {...props} className={`${className} text-2xl font-bold`}>
          {children}
        </h2>
      );
    }

    case 'section': {
      return (
        <h4 {...props} className={`${className} text-xl font-bold`}>
          {children}
        </h4>
      );
    }

    case 'content': {
      return (
        <p {...props} className={`${className} text-base `}>
          {children}
        </p>
      );
    }

    case 'caption': {
      return (
        <p {...props} className={`${className} text-sm `}>
          {children}
        </p>
      );
    }

    default: {
      return (
        <p className={className} {...props}>
          {children}
        </p>
      );
    }
  }
}

export default Typography;
