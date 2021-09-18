import React from 'react';

function Section({ children, className, ...props }) {
  return (
    <div className={`px-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Section;
