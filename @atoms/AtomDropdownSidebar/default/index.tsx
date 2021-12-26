import { FC, Fragment, useState } from 'react';
import AtomIcon from '../../AtomIcon';
import AtomLink from '../../AtomLink';
import { LinkStyled } from './style';
import { AtomDropdownSidebarProps } from '../types';

const AtomDropdownSidebarDefault: FC<AtomDropdownSidebarProps> = (props) => {
  const { links, level = 0, componentsProps } = props;
  const [showSubLinks, setShowSubLinks] = useState(false);
  return (
    <>
      {links?.map((subField) => (
        <Fragment key={subField.id}>
          <LinkStyled
            onClick={() =>
              subField.type === 'dropdown' && setShowSubLinks(!showSubLinks)
            }
            {...componentsProps?.linkProps}
          >
            <AtomLink
              as="a"
              {...subField}
              color="#7F7F7F"
              fontWeight={600}
              padding={`15px ${level * 10}px`}
            >
              {subField.label}
            </AtomLink>
            {subField.type === 'dropdown' && (
              <AtomIcon
                height="14px"
                icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg"
                color="#1F1F1F"
              />
            )}
          </LinkStyled>
          {showSubLinks && (
            <AtomDropdownSidebarDefault
              links={subField.subFields}
              level={level + 1}
            />
          )}
        </Fragment>
      ))}
    </>
  );
};

export default AtomDropdownSidebarDefault;
