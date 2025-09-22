import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
 
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
