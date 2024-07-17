import { Button } from "../ui/button"
import { ModeToggle } from "../theme/theme-toggel";
function Navigation() {
    return (
      <div className="navbar fixed top-0 left-0 w-full bg-white">
      <div className='container'>
          <Button onClick={() =>  window.open('/','_self')}>
              Home
          </Button>
          <Button onClick={() =>  window.open('/about','_self')}>
              About
          </Button>
          <ModeToggle/>
      </div>
  </div>
    )
  }

  export default Navigation;