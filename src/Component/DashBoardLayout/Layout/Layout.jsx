import React from "react";
import TopBar from "../TopBar/TopBar";
import SideBar from "../SideBar/SideBar";
import styles from "./Layout.module.css";

import Users from "../../Users/Users";

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.TopBar}>
        <TopBar />
      </div>
<div className={styles.sidemain}>
  
<div className={styles.SideBar}>
        <SideBar />
      </div>
 <main>

<Users/>
  
</main>
</div>
    </div>
  );
};

export default Layout;
