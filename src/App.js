import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/blog/Blog';
import Home from './component/home/Home';
import Catagoris from './component/catagoris/Catagoris'
import Main from './layout/Main';
import Login from './component/Login/Login';
import SignUp from './component/signup/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/catagoris',
          element:<Catagoris></Catagoris>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/catagoris',
          element:<Catagoris></Catagoris>
        }
        
      ]
    }

        
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
