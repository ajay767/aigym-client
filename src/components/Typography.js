import React from 'react';

function Typography({ type, children, className, ...props }) {
  switch (type) {
    case 'primary': {
      return <h1 className={`${className} text-3xl font-bold`}>{children}</h1>;
    }

    case 'secondary': {
      return <h2 className={`${className} text-2xl font-bold`}>{children}</h2>;
    }

    case 'section': {
      return <h4 className={`${className} text-xl`}>{children}</h4>;
    }

    case 'content': {
      return <p className={`${className} text-sm `}>{children}</p>;
    }

    case 'base': {
      return <p className={`${className} text-base `}>{children}</p>;
    }

    case 'caption': {
      return <span className={`${className} text-xs  `}>{children}</span>;
    }

    default: {
      return <p>{children}</p>;
    }
  }
}

export default Typography;
