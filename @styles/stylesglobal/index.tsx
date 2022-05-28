import { FC } from 'react';
import NormalizerStyled from './_normalizer';
import FontsStyled from './_fonts';

type Props = {
  scrollbarColor?: string;
  scrollbarWidth?: string;
};

const StylesGlobal: FC<Props> = ({
  children,
  scrollbarColor,
  scrollbarWidth,
}) => (
  <>
    <NormalizerStyled
      scrollbarColor={scrollbarColor}
      scrollbarWidth={scrollbarWidth}
    />
    <FontsStyled />
    {children}
  </>
);

export default StylesGlobal;
