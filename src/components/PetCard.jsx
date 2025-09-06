export default function PetCard({ pet, onToggle, onDelete }) {
  return (
    <article className="border border-gray-300 rounded-md shadow-sm p-4 bg-white flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{pet.name}</h3>
        <p className="text-gray-600">Age: {pet.age}</p>
        <p className="text-gray-600">
          Status: <strong className={pet.status === "available" ? "text-green-600" : "text-red-600"}>{pet.status}</strong>
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={onToggle}
          className="flex-1 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Mark as {pet.status === "available" ? "adopted" : "available"}
        </button>
        <button
          onClick={onDelete}
          className="flex-1 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </article>
  );
}



