import React from 'react';

// config

// components
import NavBar from "./Home/NavBar";
import Adlib from "./Home/Adlib";
import Feature from "./Home/Feature";
import Service from "./Home/Service";
import Footer from "./Home/Footer";
import ToolSet from "./Home/ToolSet";
import AOS from "aos";
import 'aos/dist/aos.css';
// images

// styles
import '../styles/App.css';


class App extends React.Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render() {
    return (
      <div className="general-container">
        <NavBar />
        <Adlib />
        <Feature />
        <ToolSet />
        <Service />
        <Footer />
      </div>

    );
  }
}

export default App;
