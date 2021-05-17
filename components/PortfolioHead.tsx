import Head from "next/head";

interface Infos {
  name: string;
  description: string;
}

interface Iprops {
  infos: Infos;
}

function PorfolioHead({ infos }: Iprops): JSX.Element {
  return (
    <Head>
      <title>{infos.name}</title>
      <meta name="description" content={infos.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default PorfolioHead;
