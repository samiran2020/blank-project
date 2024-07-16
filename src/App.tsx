import './App.css'
import'../app/globals.css'
import { ThemeProvider } from './components/theme/theme-provider'
import { ModeToggle } from './components/theme/theme-toggel'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ModeToggle/>
        <div className="bg-">
          hello
        </div>
    </ThemeProvider>
  )
}

export default App
