import Nav from './nav.jsx'
import Header from './header'

export default function Menu({user, setUser}) {
  return (
    (<div
      className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Nav />
      <div className="flex flex-col">
        <Header user={user} setUser={setUser}/>
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
