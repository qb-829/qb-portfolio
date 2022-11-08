import './components/assets/styles/bootstrap.css';
import './components/assets/styles/responsive.css';
import './components/assets/styles/style.css';
import Header from "./Header";
import About from "./About";
import Programs from "./Programs";
import Contact from "./Contact";
import Info from "./Info";
import Footer from "./Footer";

function App() {
  return <>
    <Header/>
    <About/>
    <Programs />
    <Contact/>
    <Info/>
    <Footer/>
  </>
}

export default App;
