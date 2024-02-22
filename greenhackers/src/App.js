import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider} from "react-router-dom" ;
import './App.css';
import Signup from "./pages/SignUp";
function App() {
  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={ <Signup/> }  />
      </Route>
    )
  )
  return (
    <div className="App">
               <RouterProvider router={router} />
    </div>
  );
}

export default App;
