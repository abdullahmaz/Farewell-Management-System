import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import Nav from './nav.jsx'
import Header from './header'
import { useToast } from '@/components/ui/use-toast';
import { useState, useEffect } from "react"

export default function Invitations({ user, setUser }) {
  const [guests, setGuests] = useState();
  const { toast } = useToast();
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

  function sendinvitation(guest) {
    fetch("http://localhost:3000/invitations/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: guest.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return toast({
            title: "Could not send invitation",
            description: data.error,
            variant: "destructive",
          });
        }
        toast({
          title: "Successfully sent invitation",
          variant: "success",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getguests();
  }, []);

  return (
    (<div
      key="1"
      className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Nav user={user} setUser={setUser} />
      <div className="flex flex-col">
        <Header user={user} setUser={setUser} />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Invitations</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Invitation Card</h2>
                <Card>
                  <div className="flex items-center justify-between">
                    <img src="/card.png" alt="Card" className="w-full h-auto" />
                  </div>
                </Card>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Invite Guests</h2>
                <div className="space-y-4">
                  {guests && guests.length > 0 ? (
                    guests.map((guest) => (
                      <Card key={guest.id}>
                        <CardContent className="flex items-center justify-between pt-6">
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarImage alt="Teacher Avatar" src={guest.avatar || "/placeholder-user.jpg"} />
                            </Avatar>
                            <div className="flex flex-col justify-center">
                              <p className="font-semibold">{guest.name}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{guest.email}</p>
                            </div>
                          </div>
                          <Button className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded" onClick={() => sendinvitation(guest)}>Send</Button>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <p>No guests available.</p>
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