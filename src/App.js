import React from "react";
import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import Movie from "./components/Movie/Movie";
import { Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";

const App = () => {
  return (
    <>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Buscador} />
      <Route path="/favs" component={Favorites} />
      <Route path="/movie/:id" component={Movie} />
    </>
  );
}

export default App;