import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import ContactForm from './components/Contact'
import About from './components/About'
// import Gallery from './components/Gallery'
function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    
    <div>
      <Nav/>
      <main>
      {!contactSelected ? (
        <>
        {/* <Gallery currentCategory={currentCategory}></Gallery> */}
        <About></About>
        </>) : ( <ContactForm></ContactForm>)
      }
      </main>
    </div>
  );
}

export default App;
