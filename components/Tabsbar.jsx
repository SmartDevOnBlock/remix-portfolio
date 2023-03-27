import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';
import Icon from './Icons';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Icon icon="/play.svg" path="/1" />
      <Icon icon="/zoom-out.svg" path="/1"/>
      <Icon icon="/zoom-in1.svg" path="/1"/>
      <Tab icon="/solidity.svg" filename="home.sol" path="/" />
      <Tab icon="/react_icon.svg" filename="about.jsx" path="/about" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/html_icon.svg" filename="articles.html" path="/articles" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
