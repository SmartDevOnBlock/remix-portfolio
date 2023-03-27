import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'smartdevonblock.me',
    href: 'https://smartdevonblock.me',
  },
  {
    social: 'email',
    link: 'smartdevonblock@gmail.com',
    href: 'mailto:smartdevonblock@gmail.com',
  },
  {
    social: 'github',
    link: 'smartdevonblock',
    href: 'https://github.com/SmartDevOnBlock',
  },
  {
    social: 'linkedin',
    link: 'smartdevonblock',
    href: 'https://www.linkedin.com/in/smartdevonblock/',
  },
  {
    social: 'twitter',
    link: 'smartdevonblock',
    href: 'https://www.twitter.com/smartdevonblock',
  },
  {
    social: 'instagram',
    link: 'smartdevonblock',
    href: 'https://www.instagram.com/smartdevonblock',
  },
  {
    social: 'polywork',
    link: 'smartdevonblock',
    href: 'https://www.polywork.com/smartdevonblock',
  },
  {
    social: 'telegram',
    link: 'smartdevonblock',
    href: 'https://t.me/smartdevonblock',
  },
  {
    social: 'codepen',
    link: 'smartdevonblock',
    href: 'https://codepen.io/smartdevonblock',
  },
  {
    social: 'codesandbox',
    link: 'smartdevonblock',
    href: 'https://codesandbox.io/u/smartdevonblock',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
