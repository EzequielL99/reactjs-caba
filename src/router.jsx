import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import Layout from "./layouts/Layout";
import Ejercicio01Page from "./views/Ejercicio01Page";
import Ejercicio02Page from "./views/Ejercicio02Page";
import Ejercicio03Page from "./views/Ejercicio03Page";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/ejercicio-01" element={<Ejercicio01Page />} />
          <Route path="/ejercicio-02" element={<Ejercicio02Page />} />
          <Route path="/ejercicio-03" element={<Ejercicio03Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
