import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/index.jsx"));
const PageNotFound = lazy(() => import("../pages/PageNotFound/index.jsx"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<Dashboard />} /> */}
      {/* <Route path="/creation" element={<Dashboard />} /> */}
      {/* <Route path="/achievement" element={<Dashboard />} /> */}
      {/* <Route path="/contact" element={<Dashboard />} /> */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};
export default AppRoutes;
