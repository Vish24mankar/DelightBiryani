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
        <Route path="/menu" element={<Menu />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
