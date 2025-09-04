import { useState } from 'react'


export default function AddPet() {
const [form, setForm] = useState({ name: '', age: '', status: 'available' })
const [added, setAdded] = useState(null)


function handleChange(e) {
const { name, value } = e.target
setForm(prev => ({ ...prev, [name]: value }))
}
function handleSubmit(e) {
e.preventDefault()
const newPet = {
id: Date.now().toString(36),
name: form.name.trim(),
age: Number(form.age),
status: form.status,
}
// For now we just show a confirmation; later, persist to DynamoDB
setAdded(newPet)
setForm({ name: '', age: '', status: 'available' })
}
return (
<section>
<h2>Add a Pet</h2>
<form className="form" onSubmit={handleSubmit}>
<label>
Name
<input name="name" value={form.name} onChange={handleChange} required />
</label>
<label>
Age
<input name="age" type="number" min="0" value={form.age} onChange={handleChange} required />
</label>
<label>
Status
<select name="status" value={form.status} onChange={handleChange}>
<option value="available">available</option>
<option value="adopted">adopted</option>
</select>
</label>
<button type="submit">Add Pet</button>
</form>
{added && (
<p className="notice">Added: {added.name} ({added.age}) — {added.status}</p>
)}
</section>
)
}
