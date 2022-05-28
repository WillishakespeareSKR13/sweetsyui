const CONFIG = {
  GRAPHQL_URL:
    process.env.GRAPHQL_SERVER_URL ||
    'https://gateway.staging.ixuapis.com/graphql/',
  GRAPHQL_CHAT_URL: 'https://chat-cs-service.staging.ixulabs.com/graphql',
  GRAPHQL_URL_WS: 'wss://chat-cs-service.staging.ixulabs.com/graphql',
  GRAPHQL_VIDEO_URL: ' https://rooms-service.staging.ixulabs.com/graphql',
  GRAPHQL_VIDEO_WSS_URL: 'wss://videocall.ixulabs.com',
  SITE: process.env.SITE ?? '.sites.develop.ixulabs.com',
  APP_ENV: process.env.APP_ENV ?? 'develop',
};

export default CONFIG;
