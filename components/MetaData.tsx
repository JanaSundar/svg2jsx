import React from 'react';
import Head from 'next/head';
import metadata from '../utils/metadata';

const MetaData = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={metadata.description} />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
        rel="stylesheet"
      ></link>

      <title>SVG2JSX</title>

      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content="@Jana__Sundar" key="twhandle" />

      <meta property="og:url" content={metadata.url} key="ogurl" />
      <meta property="og:image" content={metadata.image} key="ogimage" />
      <meta property="og:site_name" content={metadata.title} key="ogsitename" />
      <meta property="og:title" content={metadata.title} key="ogtitle" />
      <meta
        property="og:description"
        content={metadata.description}
        key="ogdesc"
      />
    </Head>
  );
};

export default MetaData;
