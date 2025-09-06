import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Pets from './pages/Pets.jsx';
import AddPet from './pages/AddPet.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div className="site">
      <header>
        <h1>Pet Adoption</h1>
        <nav>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/pets" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Pets
          </NavLink>
          <NavLink to="/add" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Add Pet
          </NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/add" element={<AddPet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Pet Adoption</footer>
    </div>
  );
}

