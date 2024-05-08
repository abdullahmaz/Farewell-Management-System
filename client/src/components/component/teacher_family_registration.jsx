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