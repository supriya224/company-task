import React from 'react'
// import {IMG} from "/logo.png"
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header_container}>
      {/* header content */}
        <div className={styles.header_container_image}>
            <img src="/asserts/logo.png"  width={250} height={100} alt="img" loading='lazy' />
        </div>
    </div>
  )
}

export default Header