import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "./Component/UserList";
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";

const App = () => {
  return (
      <Routes>
         <Route path="/" element={<UserList/>}/>
         <Route path="/add" element={<AddUser/>}/>
         <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
  );
};

export default App;
