import '../../index.css'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HomeIcon, BellIcon, Package2Icon, UsersIcon, ClipboardIcon, DollarSignIcon } from "./icons"

export default function Nav() {
    return(
        <div className="hidden border-r bg-amber-300 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" to="/dashboard">
              <Package2Icon className="h-6 w-6" />
              <span className="">Farewell Party</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
                to="/dashboard">
                <HomeIcon className="h-6 w-6" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
                to="/guests">
                <UsersIcon className="h-6 w-6" />
                Guest List
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
                to="/menu">
                <ClipboardIcon className="h-6 w-6" />
                Menu Suggestions
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
                to="/performance">
                <UsersIcon className="h-6 w-6" />
                Performance Volunteer
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
                to="/attendance">
                <ClipboardIcon className="h-6 w-6" />
                Attendance Tracking
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
                to="/budget">
                <DollarSignIcon className="h-6 w-6" />
                Budget Tracking
              </Link>
            </nav>
          </div>
        </div>
      </div>
    )
}