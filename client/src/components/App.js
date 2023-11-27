import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import ManageVolunteers from "./Pages/ManageVolunteers/ManageVolunteers";
import ManageEvents from "./Pages/ManageEvents/ManageEvents";

function App() {
  //Navbar functionality
  const routes = createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="manage-users" element={<ManageVolunteers />} />
      <Route path="manage-events" element={<ManageEvents />} />
    </Route>
  );

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
