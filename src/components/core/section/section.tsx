import React from "react";
import styles from './section.module.css'

const Section = () => {
  return (
    <section className={styles.section_container_main}>
      {/* all content */}
      <div className={styles.section_container}>
        <div className={styles.section_container_logo}>
          {/* logo is here */}
          <img src="/asserts/1.png" alt="logo" loading="lazy"  className={styles.section_container_logoimg}  />
        </div> 
        {/* second content */}
        <div className={styles.section_container_content}>
          <h3 className={styles.section_container}>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          {/* content */}
          <p className={styles.section_container_p}>
         C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </p>
          {/* content */}
          <p className={styles.section_container_p}>
          C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </p>
          {/* image */}
          <img src="/asserts/2.png" alt="img2"  loading="lazy" className={styles.section_container_img} />
          <p className={styles.section_container_p}>
            {/* last content */}
            Government of India has awarded the  <span className=" font-extrabold">"National Energy Conservation
            Award 2018"</span> . Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
