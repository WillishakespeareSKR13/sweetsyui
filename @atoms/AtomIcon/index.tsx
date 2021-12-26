import { FC, useState, useEffect } from 'react';
import { IconContainer, PlaceholderIcon } from './styled';
import { AtomIconTypes } from './types';

const DefaultIcon = `https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/outline/house-beat.svg`;

const Icon: FC<AtomIconTypes> = (props) => {
  const { icon } = props;
  const [getIcon, setGetIcon] = useState(``);

  useEffect(() => {
    const fetchIcon = () =>
      fetch(icon || DefaultIcon)
        .then((response) => response.text())
        .then((res) => res && setGetIcon(res));
    fetchIcon();
    return () => {
      setGetIcon(null);
    };
  }, [icon]);

  return getIcon ? (
    <IconContainer
      {...props}
      dangerouslySetInnerHTML={{
        __html: getIcon,
      }}
    />
  ) : (
    <PlaceholderIcon />
  );
};

export default Icon;
