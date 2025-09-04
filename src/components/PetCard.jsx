export default function PetCard({ pet, onToggle }) {
return (
<article className="card">
<h3>{pet.name}</h3>
<p>Age: {pet.age}</p>
<p>Status: <strong>{pet.status}</strong></p>
<button onClick={onToggle}>
Mark as {pet.status === 'available' ? 'adopted' : 'available'}
</button>
</article>
)
}
