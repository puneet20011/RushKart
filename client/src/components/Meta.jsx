import React from "react";

const Meta = ({ title, description, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};

Meta.defaultProps = {
  title: "Welcome to RushKart",
  description: "W products at a W price",
  keywords: "electronics, buy electronics, cheap electronics",
};

export default Meta;
