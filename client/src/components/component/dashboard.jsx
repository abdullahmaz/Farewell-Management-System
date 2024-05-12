import '../../index.css'
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Nav from './nav.jsx'
import Header from './header.jsx'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Dashboard({ setUser, user }) {
  const [guests, setGuests] = useState();
  const navigate = useNavigate();
  function getguests() {
    fetch("http://localhost:3000/guests", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setGuests(data.guests);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getguests();
  }, []);

  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Nav />
      <div className="flex flex-col">
        <Header user={user} setUser={setUser} />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Farewell Party Dashboard</h1>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            <Card>
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
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {guests && guests.length > 0 ? (
                      guests.map((guest) => (
                        <TableRow key={guest.id}>
                          <TableCell className="font-medium">{guest.name}</TableCell>
                          <TableCell>{guest.contactno}</TableCell>
                          <TableCell>
                            <Badge variant={'success'}>
                              Attending
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan="3" className="text-center">No guests attending</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Menu Suggestions</CardTitle>
                <CardDescription>Suggest menu items for the farewell party.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Appetizers</span>
                    <Button size="sm" variant="outline" onClick={() => navigate('/menu')}>
                      Suggest Appetizers
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Main Dishes</span>
                    <Button size="sm" variant="outline" onClick={() => navigate('/menu')}>
                      Suggest Main Dishes
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Desserts</span>
                    <Button size="sm" variant="outline" onClick={() => navigate('/menu')}>
                      Suggest Desserts
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Performance Volunteer</CardTitle>
                <CardDescription>Manage volunteers for the farewell party performance.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Music</span>
                    <Button size="sm" variant="outline" onClick={() => navigate('/performance')}>
                      Volunteer for Music
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Dance</span>
                    <Button size="sm" variant="outline" onClick={() => navigate('/performance')}>
                      Volunteer for Dance
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Drama</span>
                    <Button size="sm" variant="outline" onClick={() => navigate('/performance')}>
                      Volunteer for Drama
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Attendance Tracking</CardTitle>
                <CardDescription>Track attendance for the farewell party.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Attendance Report</span>
                    <Button size="sm" variant="outline" onClick={() => navigate('/attendance')}>
                      View Attendance Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Budget Tracking</CardTitle>
                <CardDescription>Track the budget for the farewell party.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Expenses</span>
                    <Button size="sm" variant="outline" onClick={() => navigate('/budget')}>
                      Track Expenses
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Revenue</span>
                    <Button size="sm" variant="outline" onClick={() => navigate('/budget')}>
                      Track Revenue
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Budget Report</span>
                    <Button size="sm" variant="outline" onClick={() => navigate('/budget')}>
                      View Budget Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

