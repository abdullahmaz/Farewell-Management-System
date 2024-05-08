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