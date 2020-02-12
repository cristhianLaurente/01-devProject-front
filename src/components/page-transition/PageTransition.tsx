import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import {
  pageStyle,
  pageVariants,
  pageTransition,
} from './page-transition-config';

/** add fade transition to page */
export const PageTransition = (props: { children: ReactElement[] }) => {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}>
      {props.children}
    </motion.div>
  );
};
