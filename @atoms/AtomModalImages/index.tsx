import { css } from '@emotion/react';
import { FC, useEffect, useRef } from 'react';
import AtomButton from '../AtomButton';
import AtomImage from '../AtomImage';
import AtomWrapper from '../AtomWrapper';
import AtomIcon from '../AtomIcon';
import AtomModal from '../AtomModal';
import { AtomModalImageProps } from './types';

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

const AtomModalImage: FC<AtomModalImageProps> = (props) => {
  const { images, selected, setSelected, state, setState } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setState?.(false);
      }
    };

    document.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [ref]);

  return (
    <AtomModal
      isOpen={state}
      componentProps={{
        containerProps: {
          customCSS: css`
            position: fixed;
            width: 100vw;
            height: 100vh;
            left: 0;
            top: 0;
            background-color: #0000008a;
            backdrop-filter: blur(12px);
            z-index: 9999;
          `,
        },
        wrapperProps: {
          width: 'max-content',
          height: 'max-content',
          refObject: ref,
          backgroundColor: 'transparent',
        },
      }}
      component={
        <AtomWrapper alignItems="flex-end">
          <AtomButton
            backgroundColor="transparent"
            fontSize="30px"
            onClick={() => setState(false)}
          >
            X
          </AtomButton>
          <AtomWrapper
            maxWidth="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <AtomButton
              padding="0px 0px"
              backgroundColor="transparent"
              customCSS={css`
                margin-right: 22px;
              `}
              onClick={() => {
                const newSelected = (selected ?? 0) - 1;
                const length = (images?.length ?? 0) - 1;
                setSelected?.(newSelected < 0 ? length : newSelected);
              }}
            >
              <AtomIcon
                height="30px"
                icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrowleft.svg"
                color="white"
                customCSS={css`
                  transform: rotate(180deg);
                `}
              />
            </AtomButton>
            {images?.find((_, idx) => idx === selected) && (
              <AtomImage
                {...animation}
                key={selected}
                height="70vh"
                width="60vw"
                alt="image"
                src={`${images?.find((_, idx) => idx === selected)}`}
                customCSS={css`
                  img {
                    object-fit: contain;
                  }
                `}
              />
            )}
            <AtomButton
              padding="0px 0px"
              backgroundColor="transparent"
              customCSS={css`
                margin-left: 22px;
              `}
              onClick={() => {
                const newSelected = (selected ?? 0) + 1;
                const length = (images?.length ?? 0) - 1;
                setSelected?.(newSelected > length ? 0 : newSelected);
              }}
            >
              <AtomIcon
                height="30px"
                icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrowleft.svg"
                color="white"
              />
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
      }
    />
  );
};

export default AtomModalImage;
