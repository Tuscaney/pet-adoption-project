export default function PetCard({ pet, onToggle, onDelete }) {
  const isAvailable = pet.status === 'available';
  return (
    <article className="card">
      <h3>{pet.name}</h3>
      <p>Age: {pet.age}</p>
      <p>
        Status:{' '}
        <strong className={isAvailable ? 'status-available' : 'status-adopted'}>
          {pet.status}
        </strong>
      </p>

      <div className="actions">
        <button className="btn btn-primary" onClick={onToggle}>
          Mark as {isAvailable ? 'adopted' : 'available'}
        </button>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </article>
  );
}




