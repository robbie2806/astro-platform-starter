// src/components/MemoryEditor.jsx
import { useState } from 'preact/hooks';

export default function MemoryEditor() {
  const [memory, setMemory] = useState('');
  const [status, setStatus] = useState('');

  const handleSave = async () => {
    setStatus("Saving...");
    const res = await fetch('/api/save-memory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ memory })
    });

    setStatus(res.ok ? "✅ Saved!" : "❌ Error saving.");
  };

  return (
    <div>
      <textarea
        value={memory}
        onInput={(e) => setMemory(e.target.value)}
        placeholder="Type your memory here..."
      />
      <button onClick={handleSave}>Save Memory</button>
      <p>{status}</p>
    </div>
  );
}
