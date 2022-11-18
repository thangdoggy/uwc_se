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

const App = () => {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
};

export default App;
