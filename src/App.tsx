import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { AnimePage } from './components/AnimePage';
import { About } from './pages/About';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/anime/:title" element={<AnimePage />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;