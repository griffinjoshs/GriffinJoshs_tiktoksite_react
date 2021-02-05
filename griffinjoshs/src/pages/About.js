import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/About.css";
import AboutHeader from "../components/AboutHeader/AboutHeader";
import AboutBoxes from "../components/AboutBoxes/AboutBoxes";
import AboutLower from "../components/AboutLower/AboutLower";
import AboutBottom from "../components/AboutBottom/AboutBottom";
import Footer from "../components/Footer/Footer";

function About() {
    return (
      <div>
      <AboutHeader />
      <AboutBoxes/>
      <AboutLower/>
      <AboutBottom/>
      <Footer/>
      </div>
    );
  }
  
  export default About;