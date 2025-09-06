import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pets from './pages/Pets'
import AddPet from './pages/AddPet'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">Pet Adoption</h1>
          <nav className="flex gap-4 items-center">
            <Link className="text-slate-600 hover:text-slate-900" to="/">Home</Link>
            <Link className="text-slate-600 hover:text-slate-900" to="/pets">Pets</Link>
            <Link className="text-slate-600 hover:text-slate-900" to="/add">Add Pet</Link>
          </nav>
        </div>
      </header>

      <main className="container flex-1 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/add" element={<AddPet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="bg-white">
        <div className="container py-4 text-sm text-slate-500">© {new Date().getFullYear()} Pet Adoption</div>
      </footer>
    </div>
  )
}



