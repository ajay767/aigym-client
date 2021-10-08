import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@ui/Typography';

function Button({ btnType, className, children, ...props }) {
  switch (btnType) {
    case 'primary': {
      return (
        <motion.button
          {...props}
          whileTap={{ scale: 0.97 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`inline-block px-5 py-2  text-white rounded bg-blue-500 ${className}`}
        >
          <Typography type="title"> {children}</Typography>
        </motion.button>
      );
    }
    default: {
      <motion.button
        {...props}
        className={`inline-block px-4 py-2 text-white rounded bg-blue-500 ${className}`}
      >
        <Typography type="title"> {children}</Typography>
      </motion.button>;
    }
  }
}

export default Button;
