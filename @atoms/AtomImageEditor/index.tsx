import {
  createRef,
  DragEvent,
  FC,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import AtomImage from '../AtomImage';
import AtomWrapper from '../AtomWrapper';
import { getEditorDefaults } from './pintura/pintura';
import { PinturaEditor } from './react-pintura/index';
import { ImageEditorStyled } from './styled';

type InputImageEditorProps = {
  wrapperCSS?: SerializedStyles;
  inputCSS?: SerializedStyles;
  modalCSS?: SerializedStyles;
  onChangeImageEditor?: ({ url: string, file: File }) => void;
  imagePreview?: string;
  aspectRatio?: number;
};

const InputImageEditor: FC<InputImageEditorProps> = (props) => {
  const { modalCSS, wrapperCSS, onChangeImageEditor, aspectRatio } = props;
  const [blob, setBlob] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [dropActive, setDropActive] = useState(false);
  const ref = createRef<PinturaEditor>();
  const refInput = useRef<HTMLInputElement>(null);

  const handleDrag = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const Drop = (e: DragEvent<HTMLLabelElement>) => {
    handleDrag(e);
    const { files } = e.dataTransfer;
    if (files.length !== 0) {
      const url = URL?.createObjectURL(files[0]);
      setBlob(url);
      setDropActive(false);
      setIsModal(true);
    } else {
      refInput.current.setAttribute('value', ``);
      setBlob(null);
      setDropActive(false);
      setIsModal(false);
    }
  };

  const DropInput = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.currentTarget;

    if (files) {
      if (files.length !== 0) {
        const url = URL?.createObjectURL(files[0]);
        setBlob(url);
        setDropActive(false);
        setIsModal(true);
      } else {
        refInput.current.setAttribute('value', ``);
        setBlob(null);
        setDropActive(false);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        ref.current.elementRef.current &&
        !ref.current.elementRef.current.contains(event.target as Node)
      ) {
        refInput.current.setAttribute('value', ``);
        setBlob(null);
        setImage(null);
        setDropActive(false);
        setIsModal(false);
      }
    };

    document.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <AtomWrapper
        customCSS={css`
          width: 250px;
          height: 250px;
          ${wrapperCSS}
        `}
      >
        <ImageEditorStyled
          htmlFor="image-editor"
          onDrop={Drop}
          onDragOver={(e: DragEvent<HTMLLabelElement>) => {
            handleDrag(e);
            setDropActive(true);
          }}
          onDragEnter={(e: DragEvent<HTMLLabelElement>) => handleDrag(e)}
          onDragLeave={(e: DragEvent<HTMLLabelElement>) => {
            handleDrag(e);
            setDropActive(false);
          }}
        >
          {image ? (
            <AtomImage
              alt="Drag and drop Preview"
              src={image}
              customCSS={css`
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
              `}
            />
          ) : (
            <AtomWrapper
              flexDirection="row"
              customCSS={css`
                font-size: 14px;
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
              `}
            >
              {!dropActive ? (
                <>
                  <AtomImage
                    alt="Drag and drop"
                    height="15px"
                    width="15px"
                    margin="0px 10px 0px 0px"
                    src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/upload.svg"
                  />
                  ARRASTRA Y SUELTA
                </>
              ) : (
                <>SUELTA</>
              )}
            </AtomWrapper>
          )}
          <input
            type="file"
            id="image-editor"
            onChange={DropInput}
            ref={refInput}
          />
        </ImageEditorStyled>
      </AtomWrapper>
      <AnimatePresence>
        {isModal && (
          <AtomWrapper
            key={`${isModal}`}
            customCSS={css`
              top: 0;
              left: 0;
              z-index: 1000;
              background-color: #3a3a3a5b;
              position: fixed;
              width: 100vw;
              height: 100vh;
              overflow: hidden;
              justify-content: center;
              align-items: center;
              .PinturaRootWrapper {
                width: 90%;
                max-width: 600px;
                height: 70%;
                max-height: 600px;
              }
              .PinturaRoot {
                background-color: #fafafa;
              }
              .PinturaButtonExport {
                background-color: #f1576c;
                color: #fff;
                :hover {
                  background-color: #c5293e;
                }
              }
              ${modalCSS}
            `}
          >
            <PinturaEditor
              {...getEditorDefaults()}
              src={blob}
              ref={ref}
              utils={['crop', 'filter', 'finetune', 'annotate', 'frame']}
              enableDropImage={false}
              imageCropAspectRatio={aspectRatio ?? 1}
              cropEnableCenterImageSelection
              cropImageSelectionCornerStyle="hook"
              cropAutoCenterImageSelectionTimeout={500}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onProcess={(res: any) => {
                const FilterAndCrop = URL.createObjectURL(res.dest);
                onChangeImageEditor?.({ url: FilterAndCrop, file: res.dest });
                setImage(FilterAndCrop);
                setIsModal(false);
              }}
            />
          </AtomWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default InputImageEditor;
