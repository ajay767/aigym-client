export const sidebarVariant = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      type: 'tween',
    },
  },
  backgroundInitial: {
    opacity: 0,
  },
  backgroundFinal: {
    opacity: 1,
  },
  backgroundExit: {
    opacity: 0,
  },
};

export const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      type: 'easeInOut',
      duration: 2,
    },
  },
};
