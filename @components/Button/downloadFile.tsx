import { gql, useLazyQuery } from '@apollo/client';
import { AtomButton } from '@atoms';
import { SerializedStyles } from '@emotion/react';
import { FC } from 'react';

type Props = {
  buttonText?: string;
  token: string;
  nameFileDownload: string;
  customCSS?: SerializedStyles;
};

export const DOWNLOAD_FILES = gql`
  query downloadFile($token: String!) {
    downloadFile(token: $token) {
      url
    }
  }
`;

const DownloadFile: FC<Props> = (props) => {
  const [getUrlFile] = useLazyQuery(DOWNLOAD_FILES);

  const downloadFile = (name, token) => {
    getUrlFile({
      variables: { token },
    }).then((response) => {
      const url = response?.data?.downloadFile?.url;
      const a = window?.document?.createElement(`a`);
      a.href = url || ``;
      a.target = `_blank`;
      a.download = name;
      document?.body?.appendChild(a);
      a.click();
      document?.body?.removeChild(a);
    });
  };
  return (
    <AtomButton
      customCSS={props?.customCSS}
      onClick={() => {
        downloadFile(props?.nameFileDownload, props?.token);
      }}
    >
      {props?.buttonText}
    </AtomButton>
  );
};

export default DownloadFile;
