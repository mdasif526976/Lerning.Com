import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/blog/Blog';
import Home from './component/home/Home';
import Catagoris from './component/catagoris/Catagoris'
import Main from './layout/Main';
import Login from './component/Login/Login';
import SignUp from './component/signup/SignUp';
import Course from './component/course/Course';
import About from './component/about/About';
import Errorpage from './component/errorpage/Errorpage';
import Premium from './component/premium/Premium';
import PrivateRouter from './component/privateRouter/PrivateRouter';

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
          element:<Catagoris></Catagoris>,
          loader:()=>fetch(' https://assignment-server-kohl.vercel.app/courses/6')
        },
        {
          path:'/course/:id',
          element:<Course></Course>,
          loader:({params})=>fetch(` https://assignment-server-kohl.vercel.app/course/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/premium',
          element:<PrivateRouter><Premium></Premium></PrivateRouter>
        },
        {
          path:'/faq',
          element:<About></About>
        },
        {
          path:'/catagoris',
          element:<Catagoris></Catagoris>
        }
        
      ]
      
    }
    ,{
      path:'*',
      element:<Errorpage></Errorpage>
    }

        
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
