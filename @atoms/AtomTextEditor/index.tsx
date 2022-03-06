import { useEditor, EditorContent } from '@tiptap/react';
import { Editor } from '@tiptap/core';
import { css } from '@emotion/react';
import { FC, useEffect, useRef, useState } from 'react';

import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import HardBreak from '@tiptap/extension-hard-break';
import UnderLine from '@tiptap/extension-underline';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import Link from '@tiptap/extension-link';
import { Color } from '@tiptap/extension-color';
import Image from '@tiptap/extension-image';
import Iframe from './iframe';
import VideoCustom from './video';
import AtomButton from '../AtomButton';
import AtomIcon from '../AtomIcon';
import AtomInput from '../AtomInput';
import AtomText from '../AtomText';
import AtomWrapper from '../AtomWrapper';
import AtomLoader from '../AtomLoader';
import uploadImage from '../../@utils/uploadImage';
import InputTextError from './error';
import { AtomTextEditorType } from './types';
import {
  ButtonStyled,
  GlobalStyles,
  InputColorStyled,
  SeparateVerticalStyled,
} from './styled';

HardBreak.configure({
  keepMarks: false,
});

export const tableHTML = `
  <table style="width:100%">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>80</td>
    </tr>
  </table>
`;

type MenuBarType = {
  editor?: Editor | null;
};

const MenuBar: FC<MenuBarType> = (props) => {
  const { editor } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [loadingFile, setLoadingFile] = useState(false);
  const [image, setImage] = useState({} as File | string);
  const [video, setVideo] = useState({} as File | string);
  const [isOpenUrl, setIsOpenUrl] = useState(false);
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const [url, setUrl] = useState('');

  const ref = useRef<HTMLButtonElement>(null);
  const ref2 = useRef<HTMLButtonElement>(null);
  const ref3 = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpenUrl(false);
      }
      if (ref2.current && !ref2.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
      if (ref3.current && !ref3.current.contains(event.target as Node)) {
        setIsOpenVideo(false);
      }
    };

    document.addEventListener(`mousedown`, handleClickOutside, true);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside, true);
    };
  }, [ref, ref2, ref3]);

  return (
    <>
      <AtomWrapper
        flexDirection="row"
        width="100%"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        padding="0px 0px 20px 0px"
        customCSS={css`
          gap: 10px;
          flex-wrap: wrap;
          ButtonStyled {
            flex-basis: 40px;
            flex-grow: 1;
            width: 40px;
            height: 40px;
            font-size: 15px;
            overflow: hidden;
            background-color: #fafafa;
            border: none;
            color: #373737;
            font-weight: bold;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
          }
        `}
      >
        <InputColorStyled
          type="color"
          onInput={(event) =>
            editor
              ?.chain()
              .focus()
              .setColor(`${event.currentTarget.value}`)
              .run()
          }
          value={editor?.getAttributes('textStyle').color ?? '#ffffff'}
        />
        <ButtonStyled
          onClick={() => editor?.chain().focus().toggleBold().run()}
          isActive={editor?.isActive('bold')}
        >
          <AtomIcon
            height="12px"
            width="12px"
            color={editor?.isActive('bold') ? '#fafafa' : '#373737'}
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/bold-solid.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          isActive={editor?.isActive('italic')}
        >
          <AtomIcon
            height="12px"
            width="12px"
            color={editor?.isActive('italic') ? '#fafafa' : '#373737'}
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/italic-solid.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          isActive={editor?.isActive('strike')}
        >
          <AtomIcon
            height="12px"
            width="12px"
            color={editor?.isActive('strike') ? '#fafafa' : '#373737'}
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/strikethrough-solid.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          isActive={editor?.isActive('underline')}
        >
          <AtomIcon
            height="12px"
            width="12px"
            color={editor?.isActive('underline') ? '#fafafa' : '#373737'}
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/underline-solid.svg"
          />
        </ButtonStyled>
        {/* <ButtonStyled
        onClick={() => editor?.chain().focus().toggleCode().run()}
        className={editor?.isActive('code') ? 'is-active' : ''}
        >
        code
        </ButtonStyled>
        <ButtonStyled
        onClick={() => editor?.chain().focus().unsetAllMarks().run()}
        >
        clear marks
        </ButtonStyled>
        <ButtonStyled onClick={() => editor?.chain().focus().clearNodes().run()}>
        clear nodes
      </ButtonStyled> */}
        <SeparateVerticalStyled />
        <AtomInput
          type="select"
          border="1px solid #d5d5d5"
          height="30px"
          labelWidth="184px"
          options={[
            { id: '0', value: 'Montserrat', label: 'Montserrat' },
            { id: '1', value: 'Inter', label: 'Inter' },
            {
              id: '2',
              value: 'Comic Sans MS, Comic Sans',
              label: 'Comic Sans MS, Comic Sans',
            },
            { id: '3', value: 'Arial', label: 'Arial' },
            { id: '4', value: 'serif', label: 'serif' },
            { id: '5', value: 'monospace', label: 'monospace' },
            { id: '6', value: 'cursive', label: 'cursive' },
          ]}
          customCSS={css`
            select {
              font-size: 10px;
              option {
                font-size: 10px;
              }
            }
            span {
              display: none;
            }
          `}
          onChange={(e) =>
            editor?.chain().focus().setFontFamily(`${e.target.value}`).run()
          }
        />
        {/* <AtomInput
          type="select"
          border="1px solid #d5d5d5"
          height="30px"
          labelWidth="180px"
          options={[
            { id: '0', value: 'Montserrat', label: 'Montserrat' },
            { id: '1', value: 'Inter', label: 'Inter' },
            {
              id: '2',
              value: 'Comic Sans MS, Comic Sans',
              label: 'Comic Sans MS, Comic Sans'
            },
            { id: '3', value: 'Arial', label: 'Arial' },
            { id: '4', value: 'serif', label: 'serif' },
            { id: '5', value: 'monospace', label: 'monospace' },
            { id: '6', value: 'cursive', label: 'cursive' }
          ]}
          customCSS={css`
            select {
              font-size: 10px;
              option {
                font-size: 10px;
              }
            }
            span {
              display: none;
            }
          `}
          onChange={(e) =>
            editor
              ?.chain()
              .focus()
              .set.setColor(`${e.currentTarget.value}`)
              .run()
          }
        /> */}
        <SeparateVerticalStyled />
        <ButtonStyled
          onClick={() => editor?.chain().focus().setTextAlign('left').run()}
          isActive={editor?.isActive({ textAlign: 'left' })}
        >
          <AtomIcon
            height="12px"
            width="12px"
            color={
              editor?.isActive({ textAlign: 'left' }) ? '#fafafa' : '#373737'
            }
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/align-left-solid.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().setTextAlign('center').run()}
          isActive={editor?.isActive({ textAlign: 'center' })}
        >
          <AtomIcon
            height="12px"
            width="12px"
            color={
              editor?.isActive({ textAlign: 'center' }) ? '#fafafa' : '#373737'
            }
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/align-center-solid.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().setTextAlign('right').run()}
          isActive={editor?.isActive({ textAlign: 'right' })}
        >
          <AtomIcon
            height="12px"
            width="12px"
            color={
              editor?.isActive({ textAlign: 'right' }) ? '#fafafa' : '#373737'
            }
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/align-right-solid.svg"
          />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().setTextAlign('justify').run()}
          isActive={editor?.isActive({ textAlign: 'justify' })}
        >
          <AtomIcon
            height="12px"
            width="12px"
            color={
              editor?.isActive({ textAlign: 'justify' }) ? '#fafafa' : '#373737'
            }
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/align-justify-solid.svg"
          />
        </ButtonStyled>
        <SeparateVerticalStyled />
        <ButtonStyled
          onClick={() => editor?.chain().focus().setParagraph().run()}
          isActive={editor?.isActive('paragraph')}
        >
          P
        </ButtonStyled>
        <ButtonStyled
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 1 }).run()
          }
          isActive={editor?.isActive('heading', { level: 1 })}
        >
          H1
        </ButtonStyled>
        <ButtonStyled
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
          isActive={editor?.isActive('heading', { level: 2 })}
        >
          H2
        </ButtonStyled>
        <ButtonStyled
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          }
          isActive={editor?.isActive('heading', { level: 3 })}
        >
          H3
        </ButtonStyled>
        <ButtonStyled
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 4 }).run()
          }
          isActive={editor?.isActive('heading', { level: 4 })}
        >
          H4
        </ButtonStyled>
        <ButtonStyled
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 5 }).run()
          }
          isActive={editor?.isActive('heading', { level: 5 })}
        >
          H5
        </ButtonStyled>
        <ButtonStyled
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 6 }).run()
          }
          isActive={editor?.isActive('heading', { level: 6 })}
        >
          H6
        </ButtonStyled>
        <SeparateVerticalStyled />
        {/* <ButtonStyled
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
        className={editor?.isActive('bulletList') ? 'is-active' : ''}
      >
        bullet list
      </ButtonStyled>
      <ButtonStyled
        onClick={() => editor?.chain().focus().toggleOrderedList().run()}
        className={editor?.isActive('orderedList') ? 'is-active' : ''}
      >
        ordered list
      </ButtonStyled>
      <ButtonStyled
        onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
        className={editor?.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </ButtonStyled>
      <ButtonStyled
        onClick={() => editor?.chain().focus().toggleBlockquote().run()}
        className={editor?.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </ButtonStyled>
      <ButtonStyled
        onClick={() => editor?.chain().focus().setHorizontalRule().run()}
      >
        horizontal rule
      </ButtonStyled>
      <ButtonStyled
        onClick={() => editor?.chain().focus().setHardBreak().run()}
      >
        hard break
      </ButtonStyled> */}
        <ButtonStyled
          customCSS={css`
            position: relative;
          `}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/picture-image-svgrepo-com.svg"
          />
          {isOpen && (
            <AtomWrapper
              refObject={ref2}
              customCSS={css`
                position: absolute;
                background-color: #ffffff;
                padding: 30px 30px;
                border-radius: 5px;
                height: max-content;
                width: 400px;
                max-width: 400px;
                top: 170%;
                left: 50%;
                transform: translateX(-50%);
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);
                :before {
                  content: '';
                  z-index: 100;
                  position: absolute;
                  top: -10px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 0;
                  height: 0;
                  border-left: 10px solid transparent;
                  border-right: 10px solid transparent;
                  border-bottom: 10px solid #ffffff;
                }
              `}
            >
              {loadingFile ? (
                <AtomLoader
                  isLoading
                  colorLoading="#f1576c"
                  height="200px"
                  type="small"
                />
              ) : (
                <>
                  <AtomInput
                    height="150px"
                    labelWidth="100%"
                    width="100%"
                    type="dragdrop"
                    onChangeDrop={(e) => {
                      setImage(e);
                    }}
                  />
                  <AtomWrapper
                    margin="10px"
                    customCSS={css`
                      ${typeof image === 'object' &&
                      image.name &&
                      css`
                        span {
                          color: #a0a0a0;
                        }
                        input {
                          background-color: #fcfcfc;
                        }
                      `}
                    `}
                  >
                    <AtomText
                      fontSize="12px"
                      fontWeight={600}
                      margin="0px 15px 0px 0px"
                    >
                      Url:
                    </AtomText>
                    <AtomInput
                      customCSS={css`
                        span {
                          display: none;
                        }
                      `}
                      labelWidth="100%"
                      width="100%"
                      type="text"
                      onChange={(e) => {
                        setImage(e.target.value);
                      }}
                    />
                  </AtomWrapper>
                  <AtomWrapper flexDirection="row" justifyContent="flex-end">
                    <AtomButton
                      customCSS={css`
                        padding: 5px;
                        background-color: #f1576c;
                      `}
                      onClick={async () => {
                        if (typeof image === 'string') {
                          editor
                            ?.chain()
                            .focus()
                            .setImage({ src: image })
                            .run();
                          setImage({} as File);
                        } else if (image.name) {
                          setLoadingFile(true);
                          await uploadImage(image, {
                            name: 'textbox',
                            orgcode: 'IXU-0001',
                          })
                            .then((res) => {
                              setLoadingFile(false);
                              setIsOpen(false);
                              editor
                                ?.chain()
                                .focus()
                                .setImage({ src: res })
                                .run();
                              setImage({} as File);
                            })
                            .catch((err) => {
                              setLoadingFile(false);
                              console.warn(err);
                            });
                        }
                        setIsOpen(false);
                      }}
                    >
                      <AtomIcon
                        height="16px"
                        width="16px"
                        color="white"
                        icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/check-4787.svg"
                      />
                    </AtomButton>
                  </AtomWrapper>
                </>
              )}
            </AtomWrapper>
          )}
        </ButtonStyled>
        <ButtonStyled
          customCSS={css`
            position: relative;
          `}
          onClick={() => {
            setIsOpenUrl(true);
          }}
        >
          <AtomIcon
            height="15px"
            width="15px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/link-solid.svg"
          />
          {isOpenUrl && (
            <AtomWrapper
              refObject={ref}
              customCSS={css`
                position: absolute;
                background-color: #ffffff;
                padding: 10px 30px;
                border-radius: 5px;
                height: max-content;
                width: 400px;
                max-width: 400px;
                top: 170%;
                left: 50%;
                transform: translateX(-50%);
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);
                :after {
                  content: '';
                  position: absolute;
                  top: -10px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 0;
                  height: 0;
                  border-left: 10px solid transparent;
                  border-right: 10px solid transparent;
                  border-bottom: 10px solid #ffffff;
                }
              `}
            >
              <AtomText
                fontSize="12px"
                fontWeight={600}
                margin="0px 15px 0px 0px"
              >
                Url:
              </AtomText>
              <AtomInput
                customCSS={css`
                  span {
                    display: none;
                  }
                `}
                labelWidth="100%"
                width="90%"
                type="text"
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
              <AtomWrapper
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="30%"
              >
                <AtomButton
                  onClick={() => {
                    editor
                      ?.chain()
                      .focus()
                      .extendMarkRange('link')
                      .unsetLink()
                      .run();
                    setIsOpenUrl(false);
                  }}
                  customCSS={css`
                    padding: 5px;
                    border: 1px solid #f1576c;
                    color: #f1576c;
                    background-color: transparent;
                  `}
                >
                  <AtomIcon
                    height="15px"
                    width="15px"
                    color="#f1576c"
                    customCSS={css`
                      svg {
                        fill: none;
                      }
                    `}
                    icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/trash.svg"
                  />
                </AtomButton>
                <AtomButton
                  customCSS={css`
                    padding: 5px;
                    background-color: #f1576c;
                  `}
                  onClick={() => {
                    setIsOpenUrl(false);
                    if (url) {
                      editor
                        ?.chain()
                        .focus()
                        .extendMarkRange('link')
                        .setLink({ href: url })
                        .run();
                    }
                  }}
                >
                  <AtomIcon
                    height="16px"
                    width="16px"
                    color="white"
                    icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/check-4787.svg"
                  />
                </AtomButton>
              </AtomWrapper>
            </AtomWrapper>
          )}
        </ButtonStyled>
        <ButtonStyled
          customCSS={css`
            position: relative;
          `}
          onClick={() => {
            setIsOpenVideo(true);
          }}
        >
          <AtomIcon
            height="15px"
            width="15px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/video-svgrepo-com.svg"
          />
          {isOpenVideo && (
            <AtomWrapper
              refObject={ref3}
              customCSS={css`
                position: absolute;
                background-color: #ffffff;
                padding: 30px 30px;
                border-radius: 5px;
                height: max-content;
                width: 400px;
                max-width: 400px;
                top: 170%;
                left: 50%;
                transform: translateX(-50%);
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.227);
                :after {
                  content: '';
                  position: absolute;
                  top: -10px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 0;
                  height: 0;
                  border-left: 10px solid transparent;
                  border-right: 10px solid transparent;
                  border-bottom: 10px solid #ffffff;
                }
              `}
            >
              {loadingFile ? (
                <AtomLoader
                  isLoading
                  colorLoading="#f1576c"
                  height="200px"
                  type="small"
                />
              ) : (
                <>
                  <AtomInput
                    height="200px"
                    labelWidth="100%"
                    width="100%"
                    type="dragdrop"
                    video
                    onChangeDrop={(e) => {
                      setVideo(e);
                    }}
                  />
                  <AtomWrapper
                    margin="10px"
                    customCSS={css`
                      ${typeof image === 'object' &&
                      image.name &&
                      css`
                        span {
                          color: #a0a0a0;
                        }
                        input {
                          background-color: #fcfcfc;
                        }
                      `}
                    `}
                  >
                    <AtomText
                      fontSize="12px"
                      fontWeight={600}
                      margin="0px 15px 0px 0px"
                    >
                      Url:
                    </AtomText>
                    <AtomInput
                      customCSS={css`
                        span {
                          display: none;
                        }
                      `}
                      labelWidth="100%"
                      width="100%"
                      type="text"
                      onChange={(e) => {
                        setVideo(e.target.value);
                      }}
                    />
                  </AtomWrapper>
                  <AtomWrapper flexDirection="row" justifyContent="flex-end">
                    <AtomButton
                      customCSS={css`
                        padding: 5px;
                        background-color: #f1576c;
                      `}
                      onClick={async () => {
                        if (typeof video === 'string') {
                          const urlVideo = `${video}`
                            .replace(
                              'https://www.youtube.com/watch?v=',
                              'https://www.youtube.com/embed/'
                            )
                            .replace(
                              'https://youtu.be/',
                              'https://www.youtube.com/embed/'
                            )
                            .replace(
                              'https://vimeo.com/',
                              'https://player.vimeo.com/video/'
                            );
                          editor
                            ?.chain()
                            .focus()
                            .setIframe({ src: urlVideo })
                            .run();
                          setVideo({} as File);
                        } else if (video.name) {
                          setLoadingFile(true);
                          await uploadImage(video, {
                            name: 'textbox',
                            orgcode: 'IXU-0001',
                          })
                            .then((res) => {
                              setLoadingFile(false);
                              setIsOpenVideo(false);
                              editor
                                ?.chain()
                                .focus()
                                .setVideo({ src: res })
                                .run();
                              setVideo({} as File);
                            })
                            .catch((err) => {
                              setLoadingFile(false);
                              console.warn(err);
                            });
                        }
                      }}
                    >
                      <AtomIcon
                        height="16px"
                        width="16px"
                        color="white"
                        icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/check-4787.svg"
                      />
                    </AtomButton>
                  </AtomWrapper>
                </>
              )}
            </AtomWrapper>
          )}
        </ButtonStyled>
        <SeparateVerticalStyled />
        <ButtonStyled
          onClick={() =>
            editor
              ?.chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          }
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/table-solid.svg"
          />
          {/* insertTable */}
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().deleteTable().run()}
          disabled={!editor?.can().deleteTable()}
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#a0a0a0"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/table-solid.svg"
          />
          {/* deleteTable */}
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().addColumnBefore().run()}
          disabled={!editor?.can().addColumnBefore()}
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-left-new.svg"
          />
          {/* addColumnBefore */}
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().deleteColumn().run()}
          disabled={!editor?.can().deleteColumn()}
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#a0a0a0"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-center-v.svg"
          />
          {/* deleteColumn */}
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().addColumnAfter().run()}
          disabled={!editor?.can().addColumnAfter()}
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-right.svg"
          />
          {/* addColumnAfter */}
        </ButtonStyled>

        <ButtonStyled
          onClick={() => editor?.chain().focus().addRowBefore().run()}
          disabled={!editor?.can().addRowBefore()}
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-top.svg"
          />
          {/* addRowBefore */}
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().deleteRow().run()}
          disabled={!editor?.can().deleteRow()}
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#a0a0a0"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-center-h.svg"
          />
          {/* deleteRow */}
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().addRowAfter().run()}
          disabled={!editor?.can().addRowAfter()}
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/border-bottom.svg"
          />
          {/* addRowAfter */}
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={editor?.isActive('bulletList') ? 'is-active' : ''}
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/list-ul-solid.svg"
          />
          {/* toggleBulletList */}
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={editor?.isActive('orderedList') ? 'is-active' : ''}
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/list-ol-solid.svg"
          />
          {/* toggleOrderedList */}
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().liftListItem('listItem').run()}
          disabled={!editor?.can().liftListItem('listItem')}
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/outdent-solid.svg"
          />
          {/* liftListItem */}
        </ButtonStyled>
        <ButtonStyled
          onClick={() => editor?.chain().focus().sinkListItem('listItem').run()}
          disabled={!editor?.can().sinkListItem('listItem')}
        >
          <AtomIcon
            height="16px"
            width="16px"
            color="#373737"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/TextEditor/indent-solid.svg"
          />
          {/* sinkListItem */}
        </ButtonStyled>
      </AtomWrapper>
    </>
  );
};

const AtomTextEditor: FC<AtomTextEditorType> = (props) => {
  const { content, id, maxWidth } = props;
  // const [code, setCode] = useState(true);
  const editor = useEditor(
    {
      extensions: [
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        StarterKit,
        TextStyle,
        FontFamily,
        Color,
        UnderLine,
        Image,
        Iframe,
        VideoCustom,
        Table.configure({
          resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
        Link.configure({
          openOnClick: false,
        }),
      ],
      content: content ?? '',
    },
    [content]
  );
  const HTML = editor?.getHTML();

  useEffect(() => {
    if (props.onChangeEditor && editor) {
      props.onChangeEditor(editor);
    }
  }, [HTML]);

  // useEffect(() => {
  //   if (loadContent !== content && content) {
  //     editor?.commands?.setContent(content);
  //     setLoadContent(content);
  //   }
  // }, [content]);

  return (
    <AtomWrapper margin="0px 0px" width="100%" maxWidth={maxWidth ?? '615px'}>
      <GlobalStyles />
      <MenuBar editor={editor} />
      <AtomWrapper
        customCSS={css`
          border: 1px solid #e6e6e6;
          border-radius: 0px 0px 8px 8px;
          z-index: -1;
          min-height: 500px;
          align-items: center;
          justify-content: flex-start;
          > div {
            min-height: 500px;
            padding: 0px;
            width: 100%;
            height: 100%;
            overflow-y: auto;
          }

          .ProseMirror {
            min-height: 500px;
            padding: 20px 20px;
            outline: none;
            .video-wrapper {
              margin: 0px 0px 20px 0px;
              video {
                width: 100%;
              }
            }
            .iframe-wrapper {
              margin: 0px 0px 20px 0px;
              position: relative;
              padding-bottom: math.div(100, 16) * 9%;
              height: 0;
              overflow: hidden;
              width: 100%;
              height: 300px;

              &.ProseMirror-selectednode {
                outline: 3px solid #68cef8;
              }

              iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
            }
          }
        `}
      >
        <EditorContent id={id} editor={editor} />
      </AtomWrapper>
      <InputTextError {...props} />
    </AtomWrapper>
  );
};

export default AtomTextEditor;
