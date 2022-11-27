import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Dashboard,
  Login,
  Collectors,
  Janitors,
  Vehicles,
  Mcps,
  VehiclesTask,
  McpsTask,
  RoutesTask,
} from "./pages";

import { Header, Sidebar } from "./components";

const App = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (!userInfo)
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    );

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <div>
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Human resources */}
            <Route path="/collectors" element={<Collectors />} />
            <Route path="/janitors" element={<Janitors />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/mcps" element={<Mcps />} />

            {/* Task management */}
            <Route path="/vehicles-task" element={<VehiclesTask />} />
            <Route path="/mcps-task" element={<McpsTask />} />
            <Route path="/routes-task" element={<RoutesTask />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
