import { useState } from 'react'
import PetCard from '../components/PetCard.jsx'
import { initialPets } from '../data/pets.js'


export default function Pets() {
const [pets, setPets] = useState(initialPets)


function toggleAdopted(id) {
setPets(prev => prev.map(p => p.id === id ? { ...p, status: p.status === 'available' ? 'adopted' : 'available' } : p))
}
return (
<section>
<h2>All Pets</h2>
<div className="grid">
{pets.map(p => (
<PetCard key={p.id} pet={p} onToggle={() => toggleAdopted(p.id)} />
))}
</div>
</section>
)
}
