import '../../index.css'
import { Link } from 'react-router-dom'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import { PartyPopperIcon } from './icons';
import { useNavigate } from "react-router-dom";
import { useToast } from '../ui/use-toast';

export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();
  const { toast } = useToast()

  function login() {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(res => res.json()).then((data) => {
      if (data.error)
        return toast({
          title: "Login Failed",
          description: data.error,
          variant: "destructive"
        })

      navigate("/dashboard");
      toast({
        title: "Login Successful",
        variant: "success"
      })

    }).catch((e) => {
      console.log(e);
    })
  }
  
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 py-12 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="text-center">
          <PartyPopperIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h1
            className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?
            <Link
              className="font-medium text-gray-900 hover:underline dark:text-gray-50"
              to="/register">
              Register
            </Link>
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <Label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="email">
              Email address
            </Label>
            <div className="mt-1">
              <Input
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-neutral-200 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-500 dark:focus:border-gray-600 dark:focus:ring-gray-600 dark:border-neutral-800"
                id="email"
                name="email"
                required
                type="email"
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="password">
                Password
              </Label>
              <div className="text-sm">
                <div
                  className="font-medium text-gray-900 hover:underline dark:text-gray-50"
                  href="#">
                  Forgot your password?
                </div>
              </div>
            </div>
            <div className="mt-1">
              <Input
                autoComplete="current-password"
                className="block w-full appearance-none rounded-md border border-neutral-200 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-500 dark:focus:border-gray-600 dark:focus:ring-gray-600 dark:border-neutral-800"
                id="password"
                name="password"
                required
                type="password" onChange={(e) => { setPassword(e.target.value) }} />
            </div>
          </div>
          <div>
            <Button
              className="flex w-full justify-center rounded-md bg-gray-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-950"
              onClick={handleLogin}>
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
