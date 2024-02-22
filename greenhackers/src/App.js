import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider} from "react-router-dom" ;
import './App.css';
import Login from "./pages/login";
function App() {
  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={ <Login/> }  />
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
