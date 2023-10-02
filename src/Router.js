import { Routes, Route, Navigate} from "react-router-dom";

import DashBoardLayout from "./Component/DashBoardLayout/Layout/Layout"

import Navigation from "./Component/Navigation/Navigation";


const Router = () => {
  return (
    <Routes>
  
  <Route
        path="/"
        element={
         <Navigation>
          
         
         </Navigation>
          
         
        }
      />

      {/* {nested router dashboard} */}
      <Route path="/dashboard" element={<DashBoardLayout />}>
       

      </Route>
     
       

       <Route path="*" element={<Navigate to="/not-found" />} /> 
    </Routes>
  );
};

export default Router;
