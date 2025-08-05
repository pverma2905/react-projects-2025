import React,{useState} from 'react'

const Request = () => {

  const [form, setForm] = useState({ name: "", author: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Book requested: ${JSON.stringify(form)}`);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Request a Book</h2>

        <input
          type="text"
          placeholder="Book Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 mb-3 text-black"
          required
          data-testid="search-name"
        />
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          className="w-full p-2 mb-3 text-black"
          required
          data-testid="search-author"
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full p-2 mb-4 text-black"
          required
          data-testid="search-price"
        />

        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
          data-testid="request-book"
        >
          Post Book Request
        </button>
      </form>
    </div>
  );

}

export default Request
