import Nav from './nav.jsx'
import Header from './header'

export default function Menu() {
  return (
    (<div
      className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Nav />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Menu Suggestions</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Menu</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Appetizers</h3>
                      <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <li>Bruschetta</li>
                        <li>Caprese Skewers</li>
                        <li>Stuffed Mushrooms</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Main Courses</h3>
                      <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <li>Grilled Salmon</li>
                        <li>Chicken Parmesan</li>
                        <li>Vegetable Lasagna</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Sides</h3>
                      <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <li>Roasted Potatoes</li>
                        <li>Garlic Bread</li>
                        <li>Steamed Broccoli</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Desserts</h3>
                      <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <li>Tiramisu</li>
                        <li>Chocolate Cake</li>
                        <li>Lemon Bars</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Suggestions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Appetizers</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Consider adding a vegetarian option like stuffed portobello mushrooms to cater to dietary
                      preferences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Main Courses</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Offer a vegan entree, such as a lentil and vegetable curry, to accommodate guests with plant-based
                      diets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Sides</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Consider adding a gluten-free option, like quinoa salad, to cater to guests with dietary
                      restrictions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Desserts</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Offer a dairy-free dessert, such as a fruit-based sorbet, to accommodate guests with lactose
                      intolerance.
                    </p>
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
