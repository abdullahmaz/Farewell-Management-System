export default function register() {
  return (
    (<div
      className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2
            className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Register for the Farewell Party
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">Fill out the form below to secure your spot.</p>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <div className="mt-1">
              <input
                autoComplete="name"
                className="block w-full appearance-none rounded-md border border-neutral-200 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-neutral-800"
                id="name"
                name="name"
                required
                type="text" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email address
            </label>
            <div className="mt-1">
              <input
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-neutral-200 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-neutral-800"
                id="email"
                name="email"
                required
                type="email" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
              Phone number
            </label>
            <div className="mt-1">
              <input
                autoComplete="tel"
                className="block w-full appearance-none rounded-md border border-neutral-200 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-neutral-800"
                id="phone"
                name="phone"
                required
                type="tel" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="dietary">
              Dietary Preferences
            </label>
            <div className="mt-1">
              <select
                className="block w-full appearance-none rounded-md border border-neutral-200 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-neutral-800"
                id="dietary"
                name="dietary">
                <option>None</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>Gluten-free</option>
                <option>Halal</option>
                <option>Kosher</option>
              </select>
            </div>
          </div>
          <div>
            <button
              className="flex w-full justify-center rounded-md border border-neutral-200 border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-neutral-800"
              type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>)
  );
}
