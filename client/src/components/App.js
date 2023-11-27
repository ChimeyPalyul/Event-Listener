import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import ManageUsers from "./ManageUsers";
import ManageEvents from "./ManageEvents";

function App() {
  //Navbar functionality
  const routes = createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="manage-users" element={<ManageUsers />} />
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
