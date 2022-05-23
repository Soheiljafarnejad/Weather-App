import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { asyncGetData } from "./features/asyncSlice";
import HomePage from "./pages/HomePage";
import ReportPage from "./pages/ReportPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetData("auto:ip"));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
