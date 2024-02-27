import React from "react";
import styles from './product.details.module.css'

const ProductsDetails = () => {
  const data=[
    {
      id:1,
      name:"CHEMICALS & PROCESS",
    },
    {
      id:2,
      name:"POWER ",
    },
    {
      id:3,
      name:"WATER & WASTE WATER",
    },
    {
      id:4,
      name:"OILS & GAS",
    },
    {
      id:5,
      name:" PHARMA SUGARS & DISTILLERIES",
    },
    {
      id:6,
      name:"PAPER & PULP",
    },
    {
      id:7,
      name:" MARINE & DEFENCE",
    },
    {
      id:8,
      name:"METAL & MINING",
    },
    {
      id:9,
      name:"FOOD & BEVERAGE PETROCHEMICAL & REFINERIES",
    },
    {
      id:10,
      name:"SOLAR",
    },
    {
      id:11,
      name:" BUILDING",
    },
    {
      id:12,
      name:" HVAC",
    },
    {
      id:13,
      name:"FIRE  FIGHTING",
    },
  ]
  return (
    <div>
{/* products detials */}
      <div className={styles.products_details_container}>
        <h3 className="">
          {/* content */}
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h3>
        <div className={styles.products_details_contents} > 
        {/* i have used map for data getting */}
          {data?.map((item,index)=>{
            return(<p key={index} className=""><span className={styles.products_details_span}>{item.name}</span></p>)
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
