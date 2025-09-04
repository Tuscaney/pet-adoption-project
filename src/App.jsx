import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Pets from './pages/Pets.jsx'
import AddPet from './pages/AddPet.jsx'
import NotFound from './pages/NotFound.jsx'
export default function App() {
return (
<div className="container">
<header className="header">
<h1>🐾 Pet Adoption</h1>
<nav>
<Link to="/">Home</Link>
<Link to="/pets">Pets</Link>
<Link to="/add">Add Pet</Link>
</nav>
</header>
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/pets" element={<Pets />} />
<Route path="/add" element={<AddPet />} />
<Route path="*" element={<NotFound />} />
</Routes>
</main>
<footer className="footer">© {new Date().getFullYear()} Pet Adoption</footer>
</div>
)
}
