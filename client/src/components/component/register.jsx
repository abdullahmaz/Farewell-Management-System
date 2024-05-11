import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export default function Register({setUser}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [diet, setDiet] = useState();
  const navigate = useNavigate();
  const { toast } = useToast();

  function register() {
    fetch("http://localhost:3000/register/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, password, diet }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error)
          return toast({
            title: "Registration Failed",
            description: data.error,
            variant: "destructive",
          });
        
        setUser(data.user);
        navigate("/dashboard");
        toast({
          title: "Successfully Registered",
          variant: "success",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="bg-cover bg-center" style={{backgroundImage: `url('/register_bg.jpg')`}}>
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white bg-opacity-40 rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Register for the Farewell Party
            </h2>
            <p className="text-center text-sm text-black mb-8">
              Fill out the form below to secure your spot.
            </p>
            <div className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-black"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  autoComplete="name"
                  className="block w-full appearance-none rounded-md border border-neutral-200 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-neutral-800"
                  id="name"
                  name="name"
                  required
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-black"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  autoComplete="email"
                  className="block w-full appearance-none rounded-md border border-neutral-200 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-neutral-800"
                  id="email"
                  name="email"
                  required
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-black"
                  htmlFor="phone"
                >
                  Phone number
                </label>
                <input
                  autoComplete="tel"
                  className="block w-full appearance-none rounded-md border border-neutral-200 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-neutral-800"
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-black"
                  htmlFor="dietary"
                >
                  Dietary Preferences
                </label>
                <select
                  className="block w-full appearance-none rounded-md border border-neutral-200 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-neutral-800"
                  id="dietary"
                  name="dietary"
                  onChange={(e) => {
                    setDiet(e.target.value);
                  }}
                >
                  <option>None</option>
                  <option>Vegetarian</option>
                  <option>Vegan</option>
                  <option>Gluten-free</option>
                  <option>Halal</option>
                  <option>Kosher</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-black"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  autoComplete="tel"
                  className="block w-full appearance-none rounded-md border border-neutral-200 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-neutral-800"
                  id="password"
                  name="password"
                  required
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={register}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
