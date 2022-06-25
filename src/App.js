import "./App.css";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import AppRoutes from "./routes/index.jsx";

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
