import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPageComponent from '../components/LoginPageComponent';
// import AdminDashboardComponent from '../components/AdminComponents/AdminDashboradComponent';
// import StudentTableComponent from '../components/AdminComponents/StudentTableComponent';
// import SubjectsComponent from '../components/AdminComponents/SubjectsComponent';
import AdminRoutingComponent from '../components/AdminComponents/AdminRoutingComponent';
//import RegisterComponent from '../components/RegisterComponent';
import StudentRoutingComponent from '../components/StudentComponent/StudentRouting';
import FacultyRouting from '../components/faculty_components/facultyRouting';
//import FacultyRoutingComponent from '../components/FacultyComponent/'
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPageComponent />
      </Route>
      <Route exact path="/login">
        <LoginPageComponent />
      </Route>
{/* 
      <Route exact path="/register">
        <RegisterComponent />
      </Route> */}
 {/* <FacultyRouting/>  */}
      {/* <AdminRoutingComponent /> */}
 <StudentRoutingComponent/> 
      {/* Admin Routing
      <Route exact path="/adminDashboard">
        <AdminDashboardComponent />
      </Route>
      <Route exact path="/adminDashboard/student">
        <StudentTableComponent />
      </Route>
      <Route exact path="/adminDashboard/subject">
        <SubjectsComponent />
      </Route> */}
    </Switch>
  );
};

export default Routing;
