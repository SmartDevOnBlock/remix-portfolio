import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Daniel Slyshchenko is an avid Web3 & Solidity developer building websites and decentralized applications you'd love to use"
      />
      <meta
        name="keywords"
        content="daniel slyshchenko, daniel, slyshchenko, web3 developer portfolio, solidity developer portfolio, mern stack, daniel slyshchenko portfolio, remix-portfolio"
      />
      <meta property="og:title" content="Daniel Slyshchenko's Portfolio" />
      <meta
        property="og:description"
        content="A web3 developer building websites and dApps that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/at9FSKK.png" />
      <meta property="og:url" content="https://remix-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Remix Portfolio'
};
