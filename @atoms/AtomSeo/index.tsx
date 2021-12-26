import Head from 'next/head';
import { FC } from 'react';
import { SeoProps } from './types';

const Seo: FC<SeoProps> = ({
  title,
  page,
  description,
  website,
  name,
  sameAs,
  alternateName,
  keywords,
  icon,
}) => (
  <Head>
    <title>
      {title} | {page}
    </title>
    <link rel="icon" type="image/png" href={icon || `/favicon.png`} />
    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=7" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta name="canonical" content={website} />
    <meta
      name="keywords"
      content={keywords ? keywords.join(`, `) : `nextjs, typescript`}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#292929" />
    <link rel="apple-touch-icon" href="/logo-96x96.png" />
    <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
    <meta name="description" content={description} />
    <meta name="author" content="Stackly Code" />
    <meta name="copyright" content="Stackly Code" />
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="googlebot" content="index,follow" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={website} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/preview.png" />

    <meta name="twitter:site" content="@StacklyCode" />
    <meta name="twitter:creator" content="@StacklyCode" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={website} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/preview.png" />
    <link rel="manifest" href="manifest.webmanifest" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': `https://schema.org`,
          '@type': `Organization`,
          name,
          alternateName,
          url: website,
          logo: `${website}logo-512x512.png`,
          contactPoint: {
            '@type': `ContactPoint`,
            telephone: ``,
            contactType: `customer service`,
            areaServed: [`AR`, `CO`, `MX`, `UY`, `SV`, `DO`],
            availableLanguage: [`en`, `es`],
          },
          sameAs,
        }),
      }}
    />
  </Head>
);

export default Seo;
