import { useState } from "react";
import { addPet } from "../lib/dynamo.js";

export default function AddPet() {
  const [form, setForm] = useState({ name: "", age: "", status: "available" });
  const [added, setAdded] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newPet = {
      id: Date.now().toString(36),
      name: form.name.trim(),
      age: Number(form.age),
      status: form.status,
    };
    try {
      await addPet(newPet);
      setAdded(newPet);
    } catch (err) {
      console.error("Error adding pet:", err);
    }
    setForm({ name: "", age: "", status: "available" });
  }

  return (
    <section className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a Pet</h2>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col text-gray-700">
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="flex flex-col text-gray-700">
          Age
          <input
            name="age"
            type="number"
            min="0"
            value={form.age}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="flex flex-col text-gray-700">
          Status
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="available">available</option>
            <option value="adopted">adopted</option>
          </select>
        </label>

        <button
          type="submit"
          disabled={!form.name || form.age === ""}
          className={`py-2 px-4 rounded-md text-white font-semibold transition-colors ${
            !form.name || form.age === ""
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Add Pet
        </button>
      </form>

      {added && (
        <p className="mt-4 text-green-600 font-medium">
          Added: {added.name} ({added.age}) — {added.status}
        </p>
      )}
    </section>
  );
}


