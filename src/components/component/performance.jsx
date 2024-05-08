import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Nav from './nav.jsx'
import Header from './header'


export default function Performance() {
  return (
    (<div
      key="1"
      className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Nav />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Performance Volunteer</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Volunteer Roles</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Stage Crew</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Assist with setting up and breaking down the stage, including lighting, sound, and props.
                    </p>
                    <Button className="mt-2" size="sm" variant="outline">
                      Sign Up
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Ushers</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Help guests find their seats and ensure the event runs smoothly.
                    </p>
                    <Button className="mt-2" size="sm" variant="outline">
                      Sign Up
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Backstage Assistants</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Provide support to performers, including costume changes and prop management.
                    </p>
                    <Button className="mt-2" size="sm" variant="outline">
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Volunteer Schedule</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Stage Crew</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Setup: 4:00 PM - 5:00 PM
                      <br />
                      Breakdown: 9:00 PM - 10:00 PM
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Ushers</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">5:30 PM - 8:30 PM</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Backstage Assistants</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">5:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Propose a Performance</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="performance-type">Performance Type</Label>
                    <Select id="performance-type">
                      <SelectTrigger>
                        <SelectValue placeholder="Select performance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dance">Dance</SelectItem>
                        <SelectItem value="music">Music</SelectItem>
                        <SelectItem value="drama">Drama</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="performance-duration">Duration</Label>
                    <Input
                      id="performance-duration"
                      placeholder="Enter duration (e.g., 10 minutes)"
                      type="text" />
                  </div>
                  <div>
                    <Label htmlFor="performance-requirements">Special Requirements</Label>
                    <Textarea
                      id="performance-requirements"
                      placeholder="Enter any special requirements" />
                  </div>
                  <Button type="submit" className="mt-2" size="sm" variant="outline">
                    Submit Proposal
                  </Button>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Proposed Performances</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Dance Performance</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Duration: 15 minutes</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Special Requirements: Stage space, music equipment
                    </p>
                    <div className="flex justify-end mt-2">
                      <Button className="mr-2" size="sm" variant="outline">
                        Vote
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Acapella Performance</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Duration: 20 minutes</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Special Requirements: Microphones</p>
                    <div className="flex justify-end mt-2">
                      <Button className="mr-2" size="sm" variant="outline">
                        Vote
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Drama Skit</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Duration: 25 minutes</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Special Requirements: Stage props, lighting
                    </p>
                    <div className="flex justify-end mt-2">
                      <Button className="mr-2" size="sm" variant="outline">
                        Vote
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
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
