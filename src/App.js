
import './App.css';
import Answers from './components/Answers/Answers';
import Auto from './components/Auto/Auto';
import Footer from './components/Footer/Footer';
import Greet from './components/Greet/Greet';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Projects from './components/Projects/Projects';
import Reason from './components/Reason/Reason';
import Steps from './components/Steps/Steps';
import Tell from './components/Tell/Tell';

function App() {
  return (
    <div className="App">
      <Header/>
      <Greet/>
      <Main/>
      <Reason/>
      <Projects/>
      <Steps/>
      <Auto/>
      <Answers/>
      <Tell/>
      <Footer/>
    </div>
  );
}

export default App;
