import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Nav from './nav.jsx'
import Header from './header'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { useEffect } from 'react';


export default function Performance({user, setUser}) {

  const [performanceType, setPerformanceType] = useState();
  const [performanceDuration, setPerformanceDuration] = useState();
  const [performanceRequirements, setPerformanceRequirements] = useState();
  const [performances, setPerformances] = useState();
  const navigate = useNavigate();
  const { toast } = useToast();

  function proposeperformance(event) {
    fetch("http://localhost:3000/performance/propose", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ performanceType, performanceDuration, performanceRequirements }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error){
          return toast({
            title: "Could not propose performance",
            description: data.error,
            variant: "destructive",
          });
        }
        navigate("/performance");
        toast({
          title: "Successfully proposed performance",
          variant: "success",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function getPerformances() {
    fetch("http://localhost:3000/performance", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setPerformances(data.performances);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => getPerformances,[]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getPerformances();
    }, 5000); // Runs every 5000 milliseconds or 5 seconds
  
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    (<div
      key="1"
      className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Nav />
      <div className="flex flex-col">
        <Header user={user} setUser={setUser}/>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Performance Volunteer</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Propose a Performance</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="performance-type">Performance Type</Label>
                    <Select id="performance-type" value={performanceType} onValueChange={setPerformanceType}>
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
                      placeholder="Enter duration (minutes)"
                      type="text" 
                      value={performanceDuration}
                      onChange={(e) => setPerformanceDuration(e.target.value)}
                      />
                  </div>
                  <div>
                    <Label htmlFor="performance-requirements">Special Requirements</Label>
                    <Textarea
                      id="performance-requirements"
                      placeholder="Enter any special requirements" 
                      value={performanceRequirements}
                      onChange={(e) => setPerformanceRequirements(e.target.value)}
                      />
                  </div>
                  <Button className="mt-2" size="sm" variant="outline" onClick={proposeperformance}>
                    Submit Proposal
                  </Button>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Proposed Performances</h2>
                <div className="space-y-4">
                {performances && performances.length > 0 && performances.map((performance, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">{performance.performance_type}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Duration: {performance.performance_duration} minutes</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Special Requirements: {performance.performance_req}
                    </p>
                    <div className="flex justify-end mt-2">
                      <Button className="mr-2" size="sm" variant="outline">
                        Vote
                      </Button>
                    </div>
                  </div>
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