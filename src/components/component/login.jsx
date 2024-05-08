import '../../index.css'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Login() {
  return (
    <div key="1" className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 py-12 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="text-center">
          <PartyPopperIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h1
            className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?
            <div
              className="font-medium text-gray-900 hover:underline dark:text-gray-50"
              href="#">
              Register
            </div>
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST">
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
                type="email" />
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
                type="password" />
            </div>
          </div>
          <div>
            <Button
              className="flex w-full justify-center rounded-md bg-gray-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-950"
              type="submit">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function PartyPopperIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5.8 11.3 2 22l10.7-3.79" />
      <path d="M4 3h.01" />
      <path d="M22 8h.01" />
      <path d="M15 2h.01" />
      <path d="M22 20h.01" />
      <path
        d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
      <path
        d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
      <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
      <path
        d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
    </svg>)
  );
}