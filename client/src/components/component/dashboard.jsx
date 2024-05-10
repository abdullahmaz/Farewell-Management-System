import '../../index.css'
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Nav from './nav.jsx'
import Header from './header.jsx'

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Nav/>
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Farewell Party Dashboard</h1>
            <Button className="ml-auto" size="sm">
              Add Event
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            <Card className = "bg-blue-100">
              <CardHeader>
                <CardTitle>Guest List</CardTitle>
                <CardDescription>Manage the guest list for the farewell party.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>RSVP</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">John Doe</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>
                        <Badge variant="success">Attending</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Jane Smith</TableCell>
                      <TableCell>jane@example.com</TableCell>
                      <TableCell>
                        <Badge variant="warning">Pending</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Bob Johnson</TableCell>
                      <TableCell>bob@example.com</TableCell>
                      <TableCell>
                        <Badge variant="danger">Declined</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button size="sm">Add Guest</Button>
              </CardFooter>
            </Card>
            <Card className = "bg-blue-100">
              <CardHeader>
                <CardTitle>Menu Suggestions</CardTitle>
                <CardDescription>Suggest menu items for the farewell party.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Appetizers</span>
                    <Button size="sm" variant="outline">
                      Suggest Appetizers
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Main Dishes</span>
                    <Button size="sm" variant="outline">
                      Suggest Main Dishes
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Desserts</span>
                    <Button size="sm" variant="outline">
                      Suggest Desserts
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Submit Menu Suggestions</Button>
              </CardFooter>
            </Card>
            <Card className = "bg-blue-100">
              <CardHeader>
                <CardTitle>Performance Volunteer</CardTitle>
                <CardDescription>Manage volunteers for the farewell party performance.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Music</span>
                    <Button size="sm" variant="outline">
                      Volunteer for Music
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Dance</span>
                    <Button size="sm" variant="outline">
                      Volunteer for Dance
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Emcee</span>
                    <Button size="sm" variant="outline">
                      Volunteer for Emcee
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Finalize Volunteers</Button>
              </CardFooter>
            </Card>
            <Card className = "bg-blue-100">
              <CardHeader>
                <CardTitle>Teachers and family registration</CardTitle>
                <CardDescription>Register teachers and families for the farewell party.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Teacher Registration</span>
                    <Button size="sm" variant="outline">
                      Register Teachers
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Family Registration</span>
                    <Button size="sm" variant="outline">
                      Register Families
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Finalize Registrations</Button>
              </CardFooter>
            </Card>
            <Card className = "bg-blue-100">
              <CardHeader>
                <CardTitle>Attendance Tracking</CardTitle>
                <CardDescription>Track attendance for the farewell party.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Check-in</span>
                    <Button size="sm" variant="outline">
                      Check-in Guests
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Attendance Report</span>
                    <Button size="sm" variant="outline">
                      View Attendance Report
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Update Attendance</Button>
              </CardFooter>
            </Card>
            <Card className = "bg-blue-100">
              <CardHeader>
                <CardTitle>Budget Tracking</CardTitle>
                <CardDescription>Track the budget for the farewell party.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Expenses</span>
                    <Button size="sm" variant="outline">
                      Track Expenses
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Revenue</span>
                    <Button size="sm" variant="outline">
                      Track Revenue
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Budget Report</span>
                    <Button size="sm" variant="outline">
                      View Budget Report
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">Update Budget</Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

