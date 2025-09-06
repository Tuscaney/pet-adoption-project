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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-700 text-lg animate-pulse">Loading pets…</p>
      </div>
    );
  }

  if (pets.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        <p>No pets found. Add some pets to get started!</p>
      </div>
    );
  }

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Pets</h2>
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
    </section>
  );
}


