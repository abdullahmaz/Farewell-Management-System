import Nav from './nav.jsx'
import Header from './header'
import { useState } from "react"

export default function Menu({ user, setUser }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  function additem() {
    fetch("http://localhost:3000/menu/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error)
          return toast({
            title: "Failed to add item",
            description: data.error,
            variant: "destructive",
          });

        setUser(data.user);
        navigate("/dashboard");
        toast({
          title: "Successfully added item",
          variant: "success",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    (<div
      className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Nav />
      <div className="flex flex-col">
        <Header user={user} setUser={setUser} />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Menu Suggestions</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">Input</h2>
                <div className="space-y-2">
                  <div className="flex flex-col">
                    <label htmlFor="name">Dish Name</label>
                    <input id="name" className="border rounded-md p-2" placeholder="Enter dish name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="price">Price</label>
                    <input id="price" className="border rounded-md p-2" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
                  </div>
                  <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={additem}>Add Item</button>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Menu</h2>
                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li>
                    Grilled Salmon
                    <span className="ml-2 text-xs">(Budget: $200)</span>
                    <span className="ml-2 text-xs">Votes: 10</span>
                    <button className="ml-2">Vote</button>
                  </li>
                  <li>
                    Chicken Parmesan
                    <span className="ml-2 text-xs">(Budget: $150)</span>
                    <span className="ml-2 text-xs">Votes: 10</span>
                    <button className="ml-2">Vote</button>
                  </li>
                  <li>
                    Vegetable Lasagna
                    <span className="ml-2 text-xs">(Budget: $130)</span>
                    <span className="ml-2 text-xs">Votes: 10</span>
                    <button className="ml-2">Vote</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>)
  );
}
