import { Routes, Route, Navigate} from "react-router-dom";
import Main from "./Screens/Main/Main";
import DashBoardLayout from "./Component/DashBoardLayout/Layout/Layout"

import HomeScreens from "./Screens/Home/Home";
import Navigation from "./Component/Navigation/Navigation";


const Router = () => {
  return (
    <Routes>
  
  <Route
        path="/"
        element={
         <Navigation>
          
          <HomeScreens />
         </Navigation>
          
         
        }
      />

      {/* {nested router dashboard} */}
      <Route path="/dashboard" element={<DashBoardLayout />}>
        <Route index element={<Main />} />

      </Route>
     
       

       <Route path="*" element={<Navigate to="/not-found" />} /> 
    </Routes>
  );
};

export default Router;
