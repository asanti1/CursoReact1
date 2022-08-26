import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui/components/NavBar";
import { DCPage } from "../pages/DCPage";
import { Hero } from "../pages/Hero";
import { MarvelPage } from "../pages/MarvelPage";
import { SearchPage } from "../pages/SearchPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<Hero />} />

          <Route path="/" element={<Navigate to="/marvel" />} />

          <Route />
        </Routes>
      </div>
    </>
  );
};
