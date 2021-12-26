import { FC } from 'react';
import NormalizerStyled from './_normalizer';
import FontsStyled from './_fonts';

type Props = {
  scrollbarColor?: string;
};

const StylesGlobal: FC<Props> = ({ children, scrollbarColor }) => (
  <>
    <NormalizerStyled scrollbarColor={scrollbarColor} />
    <FontsStyled />
    {children}
  </>
);

export default StylesGlobal;
