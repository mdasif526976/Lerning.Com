import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/blog/Blog';
import Courses from './component/Courses/Courses';
import Home from './component/home/Home';
import Main from './layout/Main';

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
         path:'/courses',
         element:<Courses></Courses>
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
