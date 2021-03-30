import NextHead from "next/head";

function Head({title, description}) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </NextHead>
  );
}

export default Head;
