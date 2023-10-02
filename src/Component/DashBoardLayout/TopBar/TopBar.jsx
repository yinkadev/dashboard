import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaSistrix,FaCaretDown} from "react-icons/fa6";
import { BsBell} from "react-icons/bs";
import styles from "../TopBar/TopBar.module.css"
import Users from '../../Users/Users';



const TopBar = () => {
  const [searchItem, setsearchItem] = useState ("")
  return (
    <nav className={styles.nav}>
   
    <div>
      <img className={styles.logo}  src="images/logo.png" alt="" />
      </div>

<div className={styles.inputdiv}>
       
 <div>
  {
    Users
    .filter = ((items) => {
      if(searchItem === ""){
        return items;
      }else if (items.username.toLowerCase().includes(searchItem.toLowerCase())){
        return items;
      }
          })

  }
 </div>

<div>
 <input
type="text"
name="email"
required
placeholder="Search for anything"
 onChange={(event) =>{
  setsearchItem(event.target.value);
}}
            
/>

</div>
 
 <button className={styles.search}>
 <FaSistrix className={styles.icons}/>
 </button>
{/* 
 <div>
  {
    Users
    .filter = ((items) => {
      if(searchItem === ""){
        return items;
      }else if (items.username.toLowerCase().includes(searchItem.toLowerCase())){
        return items;
      }
          })

  }
 </div> */}

</div>

<div className={styles.profilediv}>
<NavLink className={styles.li}>Docs</NavLink>
<NavLink className={styles.li}>
<BsBell/>
</NavLink>
<img className={styles.profile} src="images/girl2.jfif" alt="" />
<NavLink className={styles.li}>Olayimika</NavLink>
<NavLink className={styles.li}>
<FaCaretDown/>
</NavLink>
</div>


  
    </nav>
  )
}

export default TopBar