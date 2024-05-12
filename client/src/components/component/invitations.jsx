import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import Nav from './nav.jsx'
import Header from './header'
import { useToast } from '@/components/ui/use-toast';
import { useState, useEffect } from "react"

export default function Invitations({ user, setUser }) {
  const [teachers, setTeachers] = useState();
  const toast = useToast();
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
  function sendinvitation(teacher) {
    fetch("http://localhost:3000/invitations/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: teacher.email }),
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
    getTeachers();
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
                <h2 className="text-2xl font-bold mb-4">Invite Teachers</h2>
                <div className="space-y-4">
                  {teachers && teachers.map((teacher) => (
                    <Card key={teacher.id}>
                      <CardContent className="flex items-center justify-between pt-6">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage alt="Teacher Avatar" src={teacher.avatar || "/placeholder-user.jpg"} />
                          </Avatar>
                          <div className="flex flex-col justify-center">
                            <p className="font-semibold">{teacher.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{teacher.email}</p>
                          </div>
                        </div>
                        <Button className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded" onClick={() => sendinvitation(teacher)}>Send</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>)
  );
}