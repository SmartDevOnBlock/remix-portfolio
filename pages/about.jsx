const AboutPage = () => {
  return (
    <>
      <h2>A Little Bit About Me</h2>
      <h3>I am a junior web3 developer with an active mind, high ambitions and determination. <br/> I am passionate about blockchain and decentralized applications.
    <br/> I can create smart contracts using "Solidity" language, Back-end with "Node.js" and connect them to the Front-end, which I develop with "React" library and "Next.js". I can use both standard CSS modules, SCSS or Tailwind and Styled-Components frameworks to work with design.


<br/><br/>As a person, I am responsible, punctual, communicative and well-educated. I adore a creative approach to problem solving. I always dive deep into the tasks at hand, think outside the box and don't limit myself to existing solutions, trying to provide my own. </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
