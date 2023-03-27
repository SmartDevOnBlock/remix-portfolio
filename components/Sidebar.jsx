import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';
import BugIcon from './icons/BugIcon';
import LupaIcon from './icons/LupaIcon';
import EthereumIcon from './icons/EthereumIcon';
import SolidityIcon from './icons/SolidityIcon';
import PluginIcon from './icons/PluginIcon';
import Image from 'next/image';


const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: LupaIcon,
    path: '/about',
  },
  {
    Icon: SolidityIcon,
    path: '/contact',
  },
  {
    Icon: EthereumIcon,
    path: '/projects',
  },
  {
    Icon: BugIcon,
    path: '/articles',
  },
];

const sidebarBottomItems = [
  {
    Icon: PluginIcon,
    path: '/github',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className="common">
        <div style={{padding: "5px"}}>
      <Image src="/remix.png" width={45} height={45}/>
      </div>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer}>
            <Link href={path} key={path}>
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
