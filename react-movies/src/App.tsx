import React from "react";
import { Routes, Route } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";
import Index from "./movies/Index";
import Genres from "./genres/IndexGenres"
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";



function App() {




  return (

    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/genres/create" element={<CreateGenre />} />
        <Route path="/genres/edit" element={<EditGenre />} />
      </Routes >
    </BrowserRouter>

  );
}

export default App;
