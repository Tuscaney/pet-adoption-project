import { Link, Routes, Route } from 'react-router-dom';
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
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/pets"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Pets
          </Link>
          <Link
            to="/add"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Add Pet
          </Link>
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

