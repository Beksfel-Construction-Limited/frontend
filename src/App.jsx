import React, { useState } from "react";
import { Route,  Routes } from "react-router-dom";

const Invoice = React.lazy(() => import("./page/invoice"))
const Login = React.lazy(() => import("./page/auth/login"));
const Register = React.lazy(() => import("./page/auth/register"));

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path="/" element={<Invoice />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
