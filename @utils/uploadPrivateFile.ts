import { request } from 'graphql-request';
import CONFIG from 'src/config';

const removeWhiteSpaces = (name: string) =>
  name.replace(/\s+/g, '').replace('(', '').replace(')', '');
interface propsPrivate {
  memberId: string;
  projectId: string;
  folderId?: string;
  fileInput: File;
  isProfile?: boolean;
}

const getUrlPrivate = async (privateData: propsPrivate) => {
  const mutation = `
mutation uploadFilePrivate($input: UploadFilePrivateInput!) {
  uploadFilePrivate(input: $input) {
    url
    message
  }
}`;

  const { memberId, projectId, folderId, fileInput, isProfile } = privateData;

  const sanitizedName = await removeWhiteSpaces(fileInput.name);
  const input = folderId
    ? {
        memberId,
        projectId,
        folderId,
        isProfile,
        name: sanitizedName,
        fileName: sanitizedName,
        description: JSON.stringify({
          size: fileInput.size,
          type: `${fileInput?.type}`,
        }),
      }
    : {
        memberId,
        projectId,
        isProfile,
        name: sanitizedName,
        fileName: sanitizedName,
        description: JSON.stringify({
          size: fileInput.size,
          type: `${fileInput?.type}`,
        }),
      };

  const defaultEndpoint = `https://gateway.staging.ixuapis.com/graphql/`;

  // const endpoints = {
  //   production: `https://gateway.ixulabs.com/graphql/`,
  //   staging: `https://gateway.preprod.ixuapis.com/graphql/`,
  //   develop: `https://gateway.staging.ixuapis.com/graphql/`,
  // };

  const values2 = await request(
    CONFIG.GRAPHQL_URL ?? defaultEndpoint,
    mutation,
    {
      input,
    }
  );

  const data = await {
    url: values2?.uploadFilePrivate?.url,
    fileName: sanitizedName,
  };
  return data;
};

export const uploadFile = (url: string, file: File) =>
  fetch(url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': 'application/octet-stream',
    },
    mode: 'cors',
  }).catch((e) => console.error(e));

const uploadPrivateFile = (data: propsPrivate) => {
  return data?.fileInput?.name
    ? getUrlPrivate(data).then(async (response) => {
        await uploadFile(response.url, data?.fileInput);
        return response.fileName;
      })
    : data?.fileInput;
};

export default uploadPrivateFile;
