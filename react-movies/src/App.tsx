import React from "react";
import { Routes, Route } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";
import Index from "./movies/Index";
import Genres from "./genres/IndexGenres"
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";

import Actors from "./Actors/Index";
import CreateActor from "./Actors/CreateActor";
import EditActor from "./Actors/EditActor";

import IndexMovieTheaters from "./movietheaters/Index";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";
import FilterMovies from "./movies/FilterMovies";
import CreateMovies from "./movies/CreateMovie";

function App() {

  return (

    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/genres/create" element={<CreateGenre />} />
        <Route path="/genres/edit" element={<EditGenre />} />

        <Route path="/actors" element={<Actors />} />
        <Route path="/actors/create" element={<CreateActor />} />
        <Route path="/actors/edit" element={<EditActor />} />

        <Route path="/movietheaters/IndexMovieTheaters" element={<IndexMovieTheaters />} />
        <Route path="/movietheaters/create" element={<CreateMovieTheater />} />
        <Route path="/movietheaters/edit" element={<EditMovieTheater />} />
        <Route path="/movietheaters/filter" element={<FilterMovies />} />

        <Route path="/movies/create" element={<CreateMovies />} />


      </Routes >
    </BrowserRouter>

  );
}

export default App;
