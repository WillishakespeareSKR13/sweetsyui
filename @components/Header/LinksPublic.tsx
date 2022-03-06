import { AtomIcon, AtomLink } from '@atoms';
import { FC, Fragment, useState } from 'react';
import { LinkPublic } from './style';
import { AtomDropdownSidebarTypes } from './types';

const HeaderLinkPublic: FC<AtomDropdownSidebarTypes> = (props) => {
  const { data, level = 0, componentsProps, iconProps, linkedProps } = props;
  const [showSubLinks, setShowSubLinks] = useState(false);
  const [show, setShow] = useState(0);
  return (
    <>
      {data?.map((subField, index) => (
        <Fragment key={subField.id}>
          <LinkPublic
            onClick={() => {
              if (subField.type === 'dropdown' && index === show) {
                setShowSubLinks(!showSubLinks);
              } else if (!showSubLinks) {
                setShowSubLinks(!showSubLinks);
              }
              setShow(index);
            }}
            {...linkedProps}
          >
            <AtomLink
              width="100%"
              as="a"
              {...subField}
              color="#303030"
              fontWeight={600}
              padding={`15px ${level * 10 + 40}px`}
              {...componentsProps?.linksProps}
            >
              {subField.label}
            </AtomLink>
            {subField.type === 'dropdown' && (
              <AtomIcon
                {...iconProps}
                height="14px"
                icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg"
                color="#1F1F1F"
              />
            )}
          </LinkPublic>
          {showSubLinks && show === index && (
            <HeaderLinkPublic
              componentsProps={componentsProps}
              iconProps={iconProps}
              linkedProps={linkedProps}
              data={subField.subFields}
              level={level + 1}
            />
          )}
        </Fragment>
      ))}
    </>
  );
};

export default HeaderLinkPublic;
