import { Routes, Route } from "react-router-dom";
import './App.css';
import Hero from './routes/Hero';
import About2 from './routes/About2';
import Works from './routes/Works';
import Contact from './routes/Contact';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
