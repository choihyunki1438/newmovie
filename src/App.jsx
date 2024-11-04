import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import About from "./pages/About"
import MovieDetail from "./pages/MovieDetail";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchPage from "./pages/SearchPage";

const App = () => {
  
  return (
    <div className="root-wrap">
      <div className="header">
      <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:title" element={<MovieDetail />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
      </div>
    </div>
  );
};

export default App;
