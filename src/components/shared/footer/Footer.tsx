import React from "react";
import { Facebook, Globe, PhoneCall } from "react-feather";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      {/* footer content */}
      <div className={styles.footer_content}>
        {/* icon with tollfree no */}
        <a href="#">
          <p className={styles.footer_paragraph}>
            <PhoneCall size={20} /> Toll free 1800 200 1234
          </p>
        </a>
        {/* icon with facebook link */}
        <a href="https://www.facebook.com/cripumps">
          <p className={styles.footer_paragraph}>
            {" "}
            <Facebook size={20} /> www.facebook.com/cripumps
          </p>
        </a>
        {/* icon with website link */}
        <a href="https://www.crigroups.com/">
          <p className={styles.footer_paragraph}>
            {" "}
            <Globe size={20} /> www.crigroups.com
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
