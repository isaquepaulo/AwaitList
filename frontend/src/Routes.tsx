import Navbar from "components/Navbar";
import Details from "pages/Details";
import GenrePage from "pages/GenreMangaPage";
import Home from "pages/Home";
import Search from "pages/Search";
import SearchPage from "pages/TopMangaPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Rota = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/search" caseSensitive={false} element={<SearchPage />} />
        <Route path="/Manga" caseSensitive={false} element={<h1>Manga</h1>} />
        <Route path="/details/:id" element={<Details />} />
        <Route
          path="/search/:value/page/:number"
          element={<Search />}
        />
        <Route path="/genrePage" caseSensitive={false} element={<GenrePage />} />
      </Routes>
    </Router>
  );
};

export default Rota;
