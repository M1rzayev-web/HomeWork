import React from "react"
import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NavbarApp from "./components/NavbarApp";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register"

function App() {
const [user,setUser]=useState(null)
  return (
    <div>
      <Routes>
        <Route path="/" element={ <NavbarApp/>} />
        <Route path="/Login" element={<Register setUser={setUser} />} />
        <Route path="/Dashboard"
          element={
          <ProtectedRoute user={user}>
             <Dashboard user={user}/>
         </ProtectedRoute>
          } />
      </Routes>
    </div>
  );
}

export default App
