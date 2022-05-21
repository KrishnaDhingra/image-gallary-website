export const ulVariants = {
  hidden: { y: '-100%' },
  visible: {
    y: '0%',
    transition: {
      ease: [0.6, 0, 0.1, 1],
      duration: 0.5,
      staggerChildren: 0.05,
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeIn',
      duration: 0.4,
    },
  },
}
