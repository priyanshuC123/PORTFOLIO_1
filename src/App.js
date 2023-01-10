
import './App.css';
import Header from './Components/header/Header'
import NaVbar from './Components/nav/Nav'
import Contact from './Components/contact/Contact'
import About from './Components/about/About'
import Footer from './Components/footer/Footer'

import Skills from './Components/skills/Skills'
function App() {
  return (
    <div className="App">
       <NaVbar/>
       <Header/>
       <About/>
       <Skills/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
