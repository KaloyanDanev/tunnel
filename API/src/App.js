import React  from 'react';
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
import { Interview } from "./pages/Interview";
import  Gallery  from "./pages/gallery/Gallery";
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Error from './pages/Error';
import ContactPage from "./components/ContactPage";
import Book from "./pages/Book";

function App() {
  return (
      <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={ContactPage}/>
            <Route exact path="/book" component={Book}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/interview" component={Interview}/>
            <Route component={Error}/>
        </Switch>
      </>
  );
}

export default App;
