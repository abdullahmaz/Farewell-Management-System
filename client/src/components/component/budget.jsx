import Nav from './nav.jsx'
import Header from './header'
import { useState, useEffect } from 'react';

export default function Budget({user, setUser}) {
  const [menuexpenses, setMenuexpenses] = useState(0);
  const budget = 10000;
  const venue = 3000;
  const decoration = 1000;
  const entertainment = 2000;

  function getmenuexpenses() {
    fetch("http://localhost:3000/budget", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setMenuexpenses(data.totalMenuPrice);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getmenuexpenses();
  }, []);

  return (
    (<div key="1" className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Nav/>
      <div className="flex flex-col">
        <Header user={user} setUser={setUser}/>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Budget Tracking</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Budget Summary</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Total Budget</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Allocated Budget</p>
                      <p>PKR {budget}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Remaining Budget</p>
                      <p>PKR {parseInt(budget) - (parseInt(menuexpenses) + parseInt(venue) + parseInt(decoration) + parseInt(entertainment))}</p>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Expenses by Category</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Venue</p>
                      <p>PKR {venue}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Catering</p>
                      <p>PKR {menuexpenses}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Decorations</p>
                      <p>PKR {decoration}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Entertainment</p>
                      <p>PKR {entertainment}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Budget Report</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Overall Budget</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Total Expenses</p>
                      <p>PKR {parseInt(menuexpenses) + parseInt(venue) + parseInt(decoration) + parseInt(entertainment)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Remaining Budget</p>
                      <p>PKR {parseInt(budget) - (parseInt(menuexpenses) + parseInt(venue) + parseInt(decoration) + parseInt(entertainment))}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Budget Utilization</p>
                      <p>{(((parseInt(menuexpenses) + parseInt(venue) + parseInt(decoration) + parseInt(entertainment)) / parseInt(budget)) * 100).toFixed(2)}%</p>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Expense Breakdown</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Venue</p>
                      <p>{((parseInt(venue) / (parseInt(menuexpenses) + parseInt(venue) + parseInt(decoration) + parseInt(entertainment))) * 100).toFixed(2)}%</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Catering</p>
                      <p>{((parseInt(menuexpenses) / (parseInt(menuexpenses) + parseInt(venue) + parseInt(decoration) + parseInt(entertainment))) * 100).toFixed(2)}%</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Decorations</p>
                      <p>{((parseInt(decoration) / (parseInt(menuexpenses) + parseInt(venue) + parseInt(decoration) + parseInt(entertainment))) * 100).toFixed(2)}%</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Entertainment</p>
                      <p>{((parseInt(entertainment) / (parseInt(menuexpenses) + parseInt(venue) + parseInt(decoration) + parseInt(entertainment))) * 100).toFixed(2)}%</p>
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
