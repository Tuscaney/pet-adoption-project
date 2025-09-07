// src/pages/AddPet.jsx
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
    const payload = {
      id: Date.now().toString(36),
      name: form.name.trim(),
      age: Number(form.age),
      status: form.status,
    };

    try {
      await addPet(payload);
      setAdded(payload);
    } catch (err) {
      console.error("Error adding pet:", err);
    }

    setForm({ name: "", age: "", status: "available" });
  }

  return (
    <section className="container">
      <h2>Add a Pet</h2>
      <div className="card form-card">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Age
            <input
              name="age"
              type="number"
              min="0"
              value={form.age}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Status
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="available">available</option>
              <option value="adopted">adopted</option>
            </select>
          </label>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!form.name || form.age === ""}
          >
            Add Pet
          </button>
        </form>
      </div>

      {added && (
        <p className="notice">
          Added: {added.name} ({added.age}) — {added.status}
        </p>
      )}
    </section>
  );
}

