import React from "react";
import Head from "next/head";

const Header = ({ logoSrc, title }) => (
  <Head>
    <meta charSet="UTF-8" />
    <link rel="icon" href={logoSrc || ""} />
    <title>{title || ""}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

export default Header;
