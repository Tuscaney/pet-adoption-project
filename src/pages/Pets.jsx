import { useEffect, useState } from "react";
import PetCard from "../components/PetCard.jsx";
import { listPets, updatePetStatus, deletePet } from "../lib/dynamo.js";

export default function Pets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const data = await listPets();
      setPets(data);
    } catch (err) {
      console.error("Error fetching pets:", err);
    } finally {
      setLoading(false);
    }
  }

  async function toggleAdopted(id, currentStatus) {
    const newStatus = currentStatus === "available" ? "adopted" : "available";
    await updatePetStatus(id, newStatus);
    load();
  }

  async function handleDelete(id) {
    await deletePet(id);
    load();
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) return <p className="text-gray-700 mt-4">Loading pets…</p>;

  return (
    <section className="max-w-6xl mx-auto mt-6 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Pets</h2>
      {pets.length === 0 ? (
        <p className="text-gray-600">No pets found.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pets.map((p) => (
            <PetCard
              key={p.id}
              pet={p}
              onToggle={() => toggleAdopted(p.id, p.status)}
              onDelete={() => handleDelete(p.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}




