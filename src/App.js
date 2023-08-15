import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import SocialLinks from "./components/SocialLinks"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import MessageButton from "./components/MessageButton";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Education/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <SocialLinks/>
      <MessageButton/>
      <Footer/>
    </div>
  );
}

export default App;
