import React from "react";
import Header from "../components/Header/Header";
import SubscribeBar from "../components/SubscribeBar/SubscribeBar";
// import InfoSection from "../components/infoSection";
import ParallaxSection from "../components/ParallaxSection/ParallaxSection";
import Footer from "../components/Footer/Footer";
import BoxSection from "../components/BoxSection/BoxSection";
import BottomSecHome from "../components/BottomSec/BottomSecHome";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Navbar from "./components/Navbar";

function home() {
  return (
    <div>
    <Header />
    <ParallaxSection/>
    <BoxSection />
    <BottomSecHome/>
    <SubscribeBar />
    <Footer />
    </div>
  );
}

export default home;