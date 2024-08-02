import styles from './Footer.module.css'; 

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Next Js. All rights reserved.</p>
    </footer>
  );
};

export default Footer;