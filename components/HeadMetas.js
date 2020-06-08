import React from "react";

const HeadMetas = ({ title, description }) => (
  <>
    {title && <title key="title">{title}</title>}

    {title && <meta property="og:title" key="og:title" content={title} />}

    {description && <meta name="description" key="description" content={description} />}

    {description && <meta property="og:description" key="og:description" content={description} />}
  </>
);

export default HeadMetas;
