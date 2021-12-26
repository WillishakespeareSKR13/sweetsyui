import { FC } from 'react';
import { LoaderContainer } from './style';
import { LoaderProps } from './types';

const Loader: FC<LoaderProps> = (props) => {
  const { isLoading } = props;
  return isLoading ? (
    <LoaderContainer {...props}>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </LoaderContainer>
  ) : null;
};

export default Loader;
