import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Nav from './nav.jsx'
import Header from './header'


export default function teacher_family_registration() {
  return (
    (<div
      className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Nav />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Teachers and Family Registration</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Teacher Registration</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="teacher-name">Name</Label>
                    <Input id="teacher-name" placeholder="Enter teacher's name" type="text" />
                  </div>
                  <div>
                    <Label htmlFor="teacher-email">Email</Label>
                    <Input id="teacher-email" placeholder="Enter teacher's email" type="email" />
                  </div>
                  <div>
                    <Label htmlFor="teacher-subject">Subject</Label>
                    <Input id="teacher-subject" placeholder="Enter subject taught" type="text" />
                  </div>
                  <div>
                    <Label htmlFor="teacher-phone">Phone</Label>
                    <Input id="teacher-phone" placeholder="Enter teacher's phone number" type="tel" />
                  </div>
                  <div>
                    <Label htmlFor="family-members">Number of Family Members</Label>
                    <Input
                      id="family-members"
                      placeholder="Enter number of family members"
                      type="number" />
                  </div>
                  <Button type="submit" variant="primary">
                    Register Teacher
                  </Button>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Family Registration</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="family-name">Family Name</Label>
                    <Input id="family-name" placeholder="Enter family name" type="text" />
                  </div>
                  <div>
                    <Label htmlFor="family-email">Email</Label>
                    <Input id="family-email" placeholder="Enter family email" type="email" />
                  </div>
                  <div>
                    <Label htmlFor="family-phone">Phone</Label>
                    <Input id="family-phone" placeholder="Enter family phone number" type="tel" />
                  </div>
                  <div>
                    <Label htmlFor="family-members">Number of Family Members</Label>
                    <Input
                      id="family-members"
                      placeholder="Enter number of family members"
                      type="number" />
                  </div>
                  <Button type="submit" variant="primary">
                    Register Family
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Registered Teachers</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Subject: Math</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email: john.doe@example.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone: 555-1234</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Number of Family Members: 3</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Jane Smith</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Subject: English</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email: jane.smith@example.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone: 555-5678</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Number of Family Members: 2</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Michael Johnson</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Subject: Science</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email: michael.johnson@example.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone: 555-9012</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Number of Family Members: 4</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Registered Families</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Smith Family</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email: smith@example.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone: 555-2468</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Number of Members: 4</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Johnson Family</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email: johnson@example.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone: 555-3690</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Number of Members: 6</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Lee Family</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email: lee@example.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone: 555-7890</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Number of Members: 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>)
  );
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>)
  );
}


function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>)
  );
}


function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>)
  );
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>)
  );
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
