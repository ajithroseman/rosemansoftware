'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setStatus(data.success ? '✅ Message sent!' : '❌ Error sending message');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <input
        type="text"
        placeholder="Your Name"
        className="block w-full mb-2 p-2 border"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="block w-full mb-2 p-2 border"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Your Message"
        className="block w-full mb-2 p-2 border"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      ></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      <p className="mt-2 text-sm">{status}</p>
    </form>
  );
}
