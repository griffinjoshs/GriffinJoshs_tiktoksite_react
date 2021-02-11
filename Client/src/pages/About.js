import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/About.css";
import AboutHeader from "../components/AboutHeader/AboutHeader";
// import AboutBoxes from "../components/AboutBoxes/AboutBoxes";
import AboutLower from "../components/AboutLower/AboutLower";
import Footer from "../components/Footer/Footer";
import ParallaxSection from '../components/ParallaxSection/ParallaxSection';
import ParallaxContent from '../components/ParallaxSection/ParallaxContent'
import CardSection from '../components/CardSection/CardSection'

function About() {
    return (
      <div>
      <AboutHeader />
      <CardSection/>
      <AboutLower/>
      <ParallaxSection
    Header = {ParallaxContent[1].Header}
    Paragraph = {ParallaxContent[1].Paragraph}
    ButtonText = {ParallaxContent[1].ButtonText}
    ButtonIcon = {ParallaxContent[1].ButtonIcon}
    />
      <Footer/>
      </div>
    );
  }
  
  export default About;