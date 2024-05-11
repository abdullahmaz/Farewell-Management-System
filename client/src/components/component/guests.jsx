import '../../index.css'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Nav from './nav.jsx'
import Header from './header'
import { useEffect, useState } from 'react';


export default function guestpage({ user, setUser }) {
  const [guests, setGuests] = useState();
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
    (<div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Nav />
      <div className="flex flex-col">
        <Header user={user} setUser={setUser} />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Guest List</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
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
                guests.map((guest, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{guest.name}</TableCell>
                    <TableCell>{guest.contactno}</TableCell>
                    <TableCell>
                      <Badge variant={"success"}>
                        Attending
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="3" className="text-center">
                    No guests attending
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            </Table>
            
          </div>
        </main>
      </div>
    </div>)
  );
}