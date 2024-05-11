import { Link } from "react-router-dom"
import { Package2Icon, BellIcon, UsersIcon } from "./icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { SearchIcon } from "./icons"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useToast } from "@/components/ui/use-toast";

export default function SeniorStudents() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);
    const { toast } = useToast();
    const navigate = useNavigate();

    function registerSeniorStudent() {
        fetch("http://localhost:3000/senior_students/registersenior", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, contact, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error)
                    return toast({
                        title: "Registration Failed",
                        description: data.error,
                        variant: "destructive",
                    });
                toast({
                    title: "Successfully Registered",
                    variant: "success",
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    function getCountSeniorStudents() {
        fetch("http://localhost:3000/senior_students/countseniors", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (!data.error) {
              setCount(data.count);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    
    useEffect(() => getCountSeniorStudents(), []);

    return (

        <div
            className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-amber-300 lg:block dark:bg-gray-800/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        <Link className="flex items-center gap-2 font-semibold" to="/teacher_family">
                            <Package2Icon className="h-6 w-6" />
                            <span className="">Farewell Party</span>
                        </Link>
                        <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                            <BellIcon className="h-4 w-4" />
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <nav className="grid items-start px-4 text-sm font-medium">
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
                                to="/teacher_family">
                                <UsersIcon className="h-6 w-6" />
                                Teachers and family registration
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
                                to="/senior_students"
                            >
                                <UsersIcon className="h-6 w-6" />
                                Senior Students Registration
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header
                    className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-amber-300 px-6 dark:bg-gray-800/40">
                    <div className="lg:hidden" href="#">
                        <Package2Icon className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </div>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <SearchIcon
                                    className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                <Input
                                    className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                                    placeholder="Search guests, events, or activities"
                                    type="search" />
                            </div>
                        </form>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                className="rounded-full border border-neutral-200 border-gray-200 w-8 h-8 dark:border-gray-800 dark:border-neutral-800"
                                size="icon"
                                variant="ghost">
                                <img
                                    alt="Avatar"
                                    className="rounded-full"
                                    height="32"
                                    src="/placeholder-user.jpg"
                                    style={{
                                        aspectRatio: "32/32",
                                        objectFit: "cover",
                                    }}
                                    width="32" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => { navigate('/') }}>Go Back</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex items-center">
                        <h1 className="font-semibold text-lg md:text-2xl">Senior Students Registration</h1>
                    </div>
                    <div className="border shadow-sm rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Student Registration</h2>
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="contact">Contact Number</Label>
                                        <Input id="contact" placeholder="Enter your contact number" value={contact} onChange={(e) => setContact(e.target.value)} />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <Button className="w-full" type="submit" onClick={registerSeniorStudent}>
                                        Submit
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Registration Details</h2>
                                <div className="space-y-4">
                                    <div className="border rounded-lg p-4">
                                        <h3 className="text-lg font-semibold">Total Registrations</h3>
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Registered Students</p>
                                            <p>{count}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}