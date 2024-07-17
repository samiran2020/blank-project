import { Outlet } from "react-router-dom"
import Navigation from "./navigation/navigation"


const AppLayout = () => {
  

  return (
    <div className="overflow-x-hidden bg-white dark:bg-black"  >
      <Navigation />
      <Outlet />
    </div>
  )
}

export default AppLayout