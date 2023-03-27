import Image from 'next/image';
import styles from '../styles/Tab.module.css';

const Icon = ({ icon }) => {

  return (   
    <div className={`${styles.icons}`}>
    <Image src={icon} height={18} width={18} />
    </div>
  );
};

export default Icon;