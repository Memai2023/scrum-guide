import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <h3>Created by the Scrumbags</h3>
        <ul>
          <li>Alexandra Blomberg</li>
          <li>Miski M. Manzizila</li>
          <li>Wilma Norman</li>
          <li>Lisette Svan</li>
          <li>Maria Hendricks</li>
        </ul>
      </div>
      <div className={styles.footerCenter}>
      <img src="/Images/logo_transparent.png" alt="Logo transparant" style={{ maxWidth: '100px' }} />
      </div>
      <div className={styles.footerRight}>
        <p>The Scrum Guide Copyright 2024</p>
      </div>
    </footer>
  );
};

export default Footer;