import Head from 'next/head';
import { FC } from 'react';
import { SeoPageProps } from './types';

const SeoPage: FC<SeoPageProps> = (props) => (
  <Head>
    <title>
      {props.title} | {props.page}
    </title>
    <link rel="icon" type="image/png" href={props.icon ?? `/favicon.png`} />
    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=7" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta name="canonical" content={props.website} />
    <meta
      name="keywords"
      content={
        props.keywords ? props.keywords.join(`, `) : `nextjs, typescript`
      }
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="description" content={props.description} />
    <meta name="author" content="Stackly Code" />
    <meta name="copyright" content="Stackly Code" />
    <meta name="title" content={props.title} />
    <meta name="description" content={props.description} />
    <meta name="googlebot" content="index,follow" />

    <meta property="og:locale" content={props.locale ?? 'es_ES'} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:url" content={props.website} />
    <meta property="og:site_name" content={`${props.title} | ${props.page}`} />
    <meta property="og:image" content={props.image || `/preview.png`} />

    <meta
      property="og:image:secure_url"
      content={props.image || `/preview.png`}
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={props.title} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content={props.description} />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:image" content={props.image || `/preview.png`} />

    <meta
      property="og:image"
      itemProp="image"
      content={props.image || `/preview.png`}
    />
    <meta
      property="og:image:secure_url"
      content={props.image || `/preview.png`}
    />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="300" />
  </Head>
);

export default SeoPage;
