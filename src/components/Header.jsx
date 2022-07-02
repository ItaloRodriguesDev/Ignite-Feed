import styles from './Header.module.css'
import ingniteLogo from '../Assets/Ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ingniteLogo} alt="Logotipo do ignite"/>
    </header>
  );
}

