import React from 'react';
import { motion } from 'framer-motion';

function Button({ btnType, className, children, ...props }) {
  switch (btnType) {
    case 'primary': {
      return (
        <motion.button
          {...props}
          whileTap={{ scale: 0.97 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`inline-block px-5 py-1 font-medium text-white rounded bg-blue-500 ${className}`}
        >
          {children}
        </motion.button>
      );
    }
    default: {
      <motion.button
        {...props}
        className={`inline-block px-4 py-1 text-white rounded bg-blue-500 ${className}`}
      >
        {children}
      </motion.button>;
    }
  }
}

export default Button;
