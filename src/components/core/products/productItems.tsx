import React from "react";
import styles from './product.item.module.css'

const ProductItems = () => {
  return (
    <div>
      <div className={styles.products_container}>
        {/* headline */}
        <h3 className={styles.products_container_head}>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h3>
        {/* image and some content */}
        <div className={styles.products_container_img}>
        <img src="/asserts/3.png" alt="" loading="lazy" className={styles.products_container_img_tag} />
        </div>
        {/*  product content  */}
        <p className={styles.products_container_content}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
     {/* hr  */}
      <hr className={styles.products_container_hr} />
      </div>
    </div> 
  );
};

export default ProductItems;
