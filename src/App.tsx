import './App.css'
import'../app/globals.css'
import { RouterProvider } from 'react-router-dom';
import router from './router';


function App() {
  return (
    < div className="">
        <RouterProvider router={router} />
    </div>
  )
}

export default App
