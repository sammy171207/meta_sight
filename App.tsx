import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import ReportDetail from "./pages/ReportDetail";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import PressReleases from "./pages/PressReleases";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reports" element={<Reports />} />
          <Route path="reports/:id" element={<ReportDetail />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="press-releases" element={<PressReleases />} />
          <Route path="contact" element={<Contact />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;