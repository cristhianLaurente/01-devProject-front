import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import {
  pageStyle,
  pageVariants,
  pageTransition,
} from './page-transition-config';

/** props PageTransition component */
interface PageTransitionProps {
  children: ReactElement[] | ReactElement;
  /** set as bootstrap container */
  container?: boolean;
}

/** add fade transition to page */
export const PageTransition = (props: PageTransitionProps) => {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      className={props.container ? 'container' : ''}
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}>
      {props.children}
    </motion.div>
  );
};
