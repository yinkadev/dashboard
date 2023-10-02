import React  from 'react'
import Styles from "../SideBar/SideBar.module.css"

const custemersItem = [
  {
    title: "Users",
    icon: "images/user-friends 1.png" ,
  },
  {
    title: "Guarantors",
    icon:  "images/users 1.png" ,
  },
  {
    title: "Loans",
    icon: "images/sack 1.png" ,
  },
  {
    title: "Decision Models",
    icon:  "images/handshake-regular 1.png" ,
  },
  {
    title: "Savings",
    icon:  "images/piggy-bank 1.png" ,
  },
  {
    title: "Loan Request",
    icon:  "images/handdy.png" ,
  },
  {
    title: "Whitelist",
    icon: "images/user-check 1.png",
  },
  {
    title: "Karma",
    icon: "images/user-times 1.png",
  },
];
const businessItem = [
  {
    title: "Organization",
    icon: "images/briefcase 1.png" ,
  },
  {
    title: "Loan Products",
    icon: "images/user-check 1.png",
  },
  {
    title: "Savings Products",
    icon: "images/bannky.png" ,
  },
  {
    title: "Fees and Charges",
    icon:  "images/coins-solid 1.png",
  },
  {
    title: "Transactions",
    icon:  "images/icon.png" ,
  },
  {
    title: "Loan Request",
    icon: "images/user-check 1.png",
  },
  {
    title: "Services",
    icon: "images/flow.png" ,
  },
  {
    title: "Service Account",
    icon: "images/user-cog 1.png" ,
  },
  {
    title: "Settlements",
    icon: "images/scroll 1.png" ,
  },
  {
    title: "Reports",
    icon: "images/chart-bar 2.png" ,
  },
];
const settingsItem = [
  {
    title: "Preferences",
    icon: "images/silder.png" ,
  },
  {
    title: "Fees and Pricing",
    icon:  "images/badge-percent 1.png",
  },
  {
    title: "Audit Logs",
    icon: "images/clipboard-list 1.png" ,
  },

];
const SideBar = () => {
  return (
  <div className={Styles.SideBarContainer}> 
  <div className={Styles.switchOrganazion}>
    <img src="images/briefcase 1.png" alt="" />
    <p>Switch Organization</p>
    <img src="images/next.png" alt="" />
  </div>

  <div className={Styles.switchOrganazion}>
    <img src="images/home 1.png" alt="" />
    <p>Dashboard</p>
  </div>

  <div className={Styles.dashboard}>
    <p>CUSTOMERS</p>
  {custemersItem.map((item,index)=>(
   <div className={Styles.dashboards} key={index.toString()}>
  
   <div>
  <img className={Styles.icon} src={item.icon} alt={`images ${index}`} />
  </div>
  <div className={Styles.title}>{item.title}</div>
   </div>
 
  ))}
  </div>


  <div className={Styles.dashboard}>
    <p>BUSINESS</p>
  {businessItem.map((item,index)=>(
   <div className={Styles.dashboards} key={index.toString()}>
  <div>
  <img className={Styles.icon} src={item.icon} alt={`images ${index}`} />
  </div>
  <div className={Styles.title}>{item.title}</div>
   </div>
  ))}
  </div>

  <div className={Styles.dashboard}>
    <p>SETTING</p>
  {settingsItem.map((item,index)=>(
   <div className={Styles.dashboards} key={index.toString()}>
  <div>
  <img className={Styles.icon} src={item.icon} alt={`images ${index}`} />
  </div>
  <div className={Styles.title}>{item.title}</div>
   </div>
  ))}
  </div>
  </div>
  )
}

export default SideBar