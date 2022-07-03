import Navbar from "components/Navbar";
import Home from "pages/Home";
import SearchPage from "pages/SearchPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Rota = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/search" caseSensitive={false} element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default Rota;
