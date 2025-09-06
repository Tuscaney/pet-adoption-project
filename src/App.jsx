import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Pets from './pages/Pets.jsx';
import AddPet from './pages/AddPet.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">🐾 Pet Adoption</h1>
        <nav className="space-x-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pets"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600 transition-colors"
            }
          >
            Pets
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600 transition-colors"
            }
          >
            Add Pet
          </NavLink>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/add" element={<AddPet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-4 mt-auto text-gray-500 border-t">
        © {new Date().getFullYear()} Pet Adoption
      </footer>
    </div>
  );
}


