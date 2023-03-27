import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <div className={styles.windowButtons}>
        <span className={styles.close}></span>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
      </div>
      <p className={styles.title}>Daniel Slyshchenko - Remix - Ethereum IDE</p>
      <Image
        src="/remix_icon.png"
        alt="Remix Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
    </section>
  );
};

export default Titlebar;
