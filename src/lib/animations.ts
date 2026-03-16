export const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.6,
  },
  easing: {
    default: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    easeOut: [0, 0, 0.2, 1],
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: ANIMATION.duration.slow,
    ease: ANIMATION.easing.default,
  },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: ANIMATION.duration.normal,
    ease: ANIMATION.easing.default,
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: ANIMATION.stagger.normal,
    },
  },
};

export const cardHover = {
  whileHover: {
    y: -4,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.easing.default,
    },
  },
};

export const scaleOnHover = {
  whileHover: {
    scale: 1.02,
    transition: {
      duration: ANIMATION.duration.fast,
      ease: ANIMATION.easing.default,
    },
  },
};
