import { FC } from 'react';
import Mexico from './maps/mx';
import { AtomMapsTypes } from './types';

const Maps: FC<AtomMapsTypes> = (props) => {
  const { place } = props;
  switch (place) {
    case `mx`:
      return <Mexico {...props} />;
    case `co`:
      return <p>Mapa de Colombia</p>;
    case `us`:
      return <p>Mapa de US</p>;
    default:
      return <Mexico {...props} />;
  }
};

export default Maps;
