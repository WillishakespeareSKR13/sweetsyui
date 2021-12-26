import { FC } from 'react';
import { ContainerVideo } from './style';
import { PlayerProps } from './types';

const Player: FC<PlayerProps> = (props) => {
  const { video } = props;
  return (
    <ContainerVideo>
      <iframe
        src={video}
        frameBorder="0"
        allow="autoplay; fullscreen"
        title="Player"
      />
    </ContainerVideo>
  );
};

export default Player;
