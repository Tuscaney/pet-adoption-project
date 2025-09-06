import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listPets } from "../lib/dynamo.js";

const PLACEHOLDER = "https://placehold.co/300x200?text=Pet";

export default function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await listPets();
        setPets(data || []);
      } catch (err) {
        console.error("Error loading pets:", err);
      }
    }
    load();
  }, []);

  return (
    <section className="container">
      <h2 className="text-2xl font-bold mb-2">Welcome</h2>
      <p className="mb-4">
        Browse available pets, add new ones, and mark them as adopted.
      </p>

      <div className="flex gap-3 mb-6">
        <Link to="/pets" className="bg-blue-600 text-white px-4 py-2 rounded">
          View Pets
        </Link>
        <Link to="/add" className="bg-gray-200 px-4 py-2 rounded">
          Add a Pet
        </Link>
      </div>

      <h3 className="text-xl font-semibold mb-3">Our Pets</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pets.slice(0, 8).map((p) => (
          <div
            key={p.id}
            className="rounded overflow-hidden shadow border bg-white"
          >
            <img
              src={p.imageUrl || PLACEHOLDER}
              alt={p.name}
              className="w-full h-40 object-cover"
              onError={(e) => { e.currentTarget.src = PLACEHOLDER; }}
            />
            <div className="p-2">
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-600">{p.status}</p>
            </div>
          </div>
        ))}

        {!pets.length && (
          <>
            <img src={PLACEHOLDER} alt="placeholder" className="rounded" />
            <img src={PLACEHOLDER} alt="placeholder" className="rounded" />
            <img src={PLACEHOLDER} alt="placeholder" className="rounded" />
          </>
        )}
      </div>
    </section>
  );
}

