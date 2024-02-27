import React from 'react'
// import { Footer, Header, ProductsDetails, Section } from '../../components'
// import ProductItems from '../../components/core/products/Products'
import styles from './home.module.css'
import { Footer, Header, ProductItems, ProductsDetails, Section } from '../../components'

const Home = () => {
  return (
    <div className={styles.home_container}>
      {/* all pages import here */}
      {/* header */}
      <Header/>
      {/* section which is includes trophy and content */}
      <Section/>
      {/* products-items */}
      <ProductItems/>
      {/* products details */}
      <ProductsDetails/>
      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Home