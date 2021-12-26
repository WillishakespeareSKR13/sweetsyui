import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { useRouter } from 'next/router';
import AtomContainer from '../../@atoms/AtomContainer';
import { AtomContainerTypes } from '../../@atoms/AtomContainer/types';

const spring = {
  x: { type: `spring`, damping: 20, stiffness: 180, when: `afterChildren` },
  default: { duration: 0.45 },
};

const animation = {
  transition: spring,
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const LayoutAnimation: FC<AtomContainerTypes> = (props) => {
  const { children } = props;
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <AtomContainer
        as="main"
        minHeight="100vh"
        {...props}
        {...animation}
        key={router.pathname}
      >
        {children}
      </AtomContainer>
    </AnimatePresence>
  );
};
export default LayoutAnimation;
