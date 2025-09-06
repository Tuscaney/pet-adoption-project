export default function PetCard({ pet, onToggle, onDelete }) {
  return (
    <article className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800">{pet.name}</h3>
      <p className="text-gray-600">Age: {pet.age}</p>
      <p className="text-gray-600">
        Status: <strong className={pet.status === 'available' ? 'text-green-600' : 'text-red-600'}>{pet.status}</strong>
      </p>
      <div className="mt-2 flex gap-2">
        <button
          onClick={onToggle}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
        >
          Mark as {pet.status === "available" ? "adopted" : "available"}
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </article>
  );
}

