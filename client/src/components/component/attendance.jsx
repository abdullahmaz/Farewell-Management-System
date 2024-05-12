import Nav from './nav.jsx'
import Header from './header'
import { useState, useEffect } from 'react';

export default function attendance({ user, setUser }) {
  const [teacherCount, setTeacherCount] = useState(0);
  const [familyCount, setFamilyCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);

  function getteacherscount() {
    fetch("http://localhost:3000/attendance/teachercount", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setTeacherCount(data.count);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function getfamilycount() {
    fetch("http://localhost:3000/attendance/familycount", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setFamilyCount(data.totalFamilyCount);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function getseniorcount() {
    fetch("http://localhost:3000/attendance/seniorcount", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setSeniorCount(data.totalSeniorCount);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getteacherscount();
    getfamilycount();
    getseniorcount();
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
            <h1 className="font-semibold text-lg md:text-2xl">Attendance Tracking</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Attendance Summary</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Teachers</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Teachers Attended</p>
                      <p>{teacherCount}</p>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Families</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Families Members Attended</p>
                      <p>{familyCount}</p>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Senior Students</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Senior Students Attended</p>
                      <p>{seniorCount}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Attendance Report</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold">Overall Attendence</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Total Attendees</p>
                      <p>{parseInt(teacherCount) + parseInt(familyCount) + parseInt(seniorCount)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Attendance Rate</p>
                      <p>{(parseInt(teacherCount) + parseInt(familyCount) + parseInt(seniorCount)) > 0 ? ((parseInt(teacherCount) + parseInt(familyCount) + parseInt(seniorCount)) / (parseInt(teacherCount) + parseInt(familyCount) + parseInt(seniorCount))) * 100 : 0}%</p>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Attendance by Category</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Teachers Attendance</p>
                      <p>{(parseInt(teacherCount) + parseInt(familyCount) + parseInt(seniorCount)) > 0 ? ((parseInt(teacherCount) / (parseInt(teacherCount) + parseInt(familyCount) + parseInt(seniorCount))) * 100).toFixed(2) : '0'}%</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Family Attendance</p>
                      <p>{(parseInt(teacherCount) + parseInt(familyCount) + parseInt(seniorCount)) > 0 ? ((parseInt(familyCount) / (parseInt(teacherCount) + parseInt(familyCount) + parseInt(seniorCount))) * 100).toFixed(2) : '0'}%</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Senior Students Attendance</p>
                      <p>{(parseInt(teacherCount) + parseInt(familyCount) + parseInt(seniorCount)) > 0 ? ((parseInt(seniorCount) / (parseInt(teacherCount) + parseInt(familyCount) + parseInt(seniorCount))) * 100).toFixed(2) : '0'}%</p>
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
