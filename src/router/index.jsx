import React from "react";
import { Blue, Gentra, Black, White, Red, Cobalt } from "../pages";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Blue />} />
        <Route path="Gentra" element={<Gentra />} />
        <Route path="Black" element={<Black />} />
        <Route path="White" element={<White />} />
        <Route path="Red" element={<Red />} />
        <Route path="Cobalt" element={<Cobalt />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Index;
