import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <p className={styles.companyInfo}>
          {' '}
          STARSOFT © TODOS OS DIREITOS RESERVADOS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
