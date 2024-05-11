import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom'
import { BellIcon, Package2Icon, UsersIcon } from './icons'
import { useNavigate } from "react-router-dom"
import { SearchIcon } from "./icons"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";


export default function teacher_family_registration() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [familyname, setFamilyName] = useState('');
  const [familymembers, setFamilyMembers] = useState('');
  const [teachers, setTeachers] = useState();
  const [families, setFamilies] = useState();
  const { toast } = useToast();


  function registerTeacher() {
    fetch("http://localhost:3000/teacher_family/registerteacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, phone }),
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

  function getTeachers() {
    fetch("http://localhost:3000/teacher_family/getallteachers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setTeachers(data.teachers);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function registerFamily() {
    fetch("http://localhost:3000/teacher_family/registerfamily", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ familyname, familymembers }),
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

  function getFamilies() {
    fetch("http://localhost:3000/teacher_family/getallfamilies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setFamilies(data.families);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => getTeachers(), []);
  useEffect(() => getFamilies(), []);

  return (
    (<div
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
            <h1 className="font-semibold text-lg md:text-2xl">Teachers and Family Registration</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Teacher Registration</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="teacher-name">Name</Label>
                    <Input id="teacher-name" placeholder="Enter teacher's name" type="text" onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="teacher-email">Email</Label>
                    <Input id="teacher-email" placeholder="Enter teacher's email" type="email" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="teacher-subject">Subject</Label>
                    <Input id="teacher-subject" placeholder="Enter subject taught" type="text" onChange={(e) => setSubject(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="teacher-phone">Phone</Label>
                    <Input id="teacher-phone" placeholder="Enter teacher's phone number" type="tel" onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <Button onClick={registerTeacher} variant="primary" className="rounded-md bg-gray-900 text-white">
                    Register Teacher
                  </Button>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Family Registration</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="family-name">Family Name</Label>
                    <Input id="family-name" placeholder="Enter family name" type="text" onChange={(e) => setFamilyName(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="family-members">Number of Family Members</Label>
                    <Input
                      id="family-members"
                      placeholder="Enter number of family members"
                      onChange={(e) => setFamilyMembers(e.target.value)} />
                  </div>
                  <Button type="submit" variant="primary" className="rounded-md bg-gray-900 text-white" onClick={registerFamily}>
                    Register Family
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Registered Teachers</h2>
                <div className="space-y-4">
                  {teachers && teachers.length > 0 ? (
                    teachers.map((teacher) => (
                      <div className="border rounded-lg p-4" key={teacher.teacher_id}>
                        <h3 className="text-lg font-semibold">{teacher.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Subject: {teacher.sub_taught}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email: {teacher.email}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone: {teacher.contactno}</p>
                      </div>
                    ))
                  ) : (
                    <p>No teachers registered yet.</p>
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Registered Families</h2>
                <div className="space-y-4">
                  {families && families.length > 0 ? (
                    families.map((family) => (
                      <div className="border rounded-lg p-4" key={family.id}>
                        <h3 className="text-lg font-semibold">{family.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Number of Members: {family.count}</p>
                      </div>
                    ))
                  ) : (
                    <p>No families registered yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>)
  );
}