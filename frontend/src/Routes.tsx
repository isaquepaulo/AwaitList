import Navbar from "components/Navbar";
import Details from "pages/Details";
import FindManga from "pages/FindManga";
import GenrePage from "pages/GenreMangaPage";
import Home from "pages/Home";
import Search from "pages/Search";
import TopMangaPage from "pages/TopMangaPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Rota = () => {
  return ( 
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/top" caseSensitive={false} element={<TopMangaPage />} />
        <Route path="/findManga" caseSensitive={false} element={<FindManga />} />
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
