import Portfolio from "./components/Portfolio";
import "./assets/scss/style.scss";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import {useApp} from "./useApp";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useEffect, useState} from "react";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useApp({isLoading, setIsLoading});

  useEffect(() => {
    let timeout;

    if (isLoading) {
      document.querySelector(".loader").classList.remove("loader--hide");
    } else {
      timeout = setTimeout(() => {
        document.querySelector(".loader").classList.add("loader--hide");
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading]);

  return (
    <>
      <div className="loader center">
        <div className="loader__body flex align-center">
          <div className="loader__icon"></div>
          <p>Loading</p>
        </div>
      </div>
      <Router>
        <div className="App">
          <div className="bg-animation-effect"></div>
          <div className="overlay-effect"></div>
          <Header
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
            isOverlayActive={isOverlayActive}
            setIsOverlayActive={setIsOverlayActive}
          />
          <Switch>
            <Route path="/contact">
              <Contact
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                isOverlayActive={isOverlayActive}
                setIsOverlayActive={setIsOverlayActive}
              />
            </Route>
            <Route path="/portfolio">
              <Portfolio
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                isOverlayActive={isOverlayActive}
                setIsOverlayActive={setIsOverlayActive}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </Route>
            <Route path="/">
              <About
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                isOverlayActive={isOverlayActive}
                setIsOverlayActive={setIsOverlayActive}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;