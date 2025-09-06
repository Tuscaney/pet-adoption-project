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

  if (loading) return <p className="notice">Loading pets…</p>;

  return (
    <section className="container">
      <h2>All Pets</h2>
      {pets.length === 0 ? (
        <p className="notice">No pets found. Add some pets to get started!</p>
      ) : (
        <div className="grid">
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





