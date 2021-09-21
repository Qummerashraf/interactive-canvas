import React, { useState, useEffect } from "react";
import Gallery from "./component/display/Gallery";
import Search from "./component/display/Search";
import Header from "./component/header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Canvas from "./page/Canvas";

export const Context = React.createContext();

function App() {
  const [image, setImage] = useState([]);
  const [search, setSearch] = useState([]);
  const [getsearch, setgetSearch] = useState([]);
  const [canvasImg, setCanvasImg] = useState("https://statinfer.com/wp-content/uploads/dummy-user.png");

  const getImage = () => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=P_GizFOctf-Q3t8ToMyP6hnlk5l4Ji39zAZlzLTPuz4"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return setImage(data);
      });
  };

  useEffect(() => {
    getImage();
  }, []);

  const getName = (e) => {
    setSearch(e.target.value);
  };

  const submitName = (evt) => {
    evt.preventDefault();
    fetch(
      `https://api.unsplash.com/search/photos?query=${search}&client_id=P_GizFOctf-Q3t8ToMyP6hnlk5l4Ji39zAZlzLTPuz4`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return setgetSearch(data.results);
      });
  };

  const imgSrc = (id, src) => {
    setCanvasImg(src);
    console.log(`${id} : ${src}`);
  };




  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Search submitName={submitName} getName={getName} />
            <Context.Provider value={{ image, getsearch, imgSrc }}>
              <Gallery />
            </Context.Provider>
          </Route>
          <Route path="/canvas">
            <Context.Provider value={{ canvasImg }}>
              <Canvas />
            </Context.Provider>

          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
