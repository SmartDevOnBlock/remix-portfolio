const AboutPage = () => {
  return (
    <>
      <h2>A Little Bit About Me</h2>
      <h3><br/>I am a <b>junior web3 developer<b/> with an active mind, high ambitions and determination. <br/> I am passionate about blockchain and decentralized applications.
    <br/><br/> I can create smart contracts using <mark>"Solidity"<mark/> language, Back-end with <mark>"Node.js"<mark/> and connect them to the Front-end, which I develop with <mark>"React"<mark/> library and <mark>"Next.js"<mark/>. I can use both standard <strong>CSS modules<strong/>, <strong>SCSS<strong/> or <strong>Tailwind<strong/> and <strong>Styled-Components<strong/> frameworks to work with design.


<br/><br/>As a person, I am <i>responsible</i>, <i>punctual</i>, <i>communicative</i> and <i>well-educated</i>. I adore a creative approach to problem solving. I always dive deep into the tasks at hand, think outside the box and don't limit myself to existing solutions, trying to provide my own. </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
