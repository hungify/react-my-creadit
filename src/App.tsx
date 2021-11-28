import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./App.css";
import AddEditPage from "./features/AddAndEdit";
const Home = React.lazy(() => import("./layouts/MainLayout"));

function App() {
  // const handleSearchKeyWordChange = (keyword: string) => {
  //   filterSearchDebts(keyword);
  // };

  return (
    <div className="App">
      <Suspense fallback={<Spinner type="grow" color="primary" />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/debt" />} />
            <Route path="debt" element={<Home />} />
            <Route path="debt/add" element={<AddEditPage />} />
            <Route path="debt/:debtId" element={<AddEditPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
