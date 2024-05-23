
import { Banner } from './Components/Banner/Banner';
import { createBrowserRouter, RouterProvider  } from "react-router-dom"
import './App.css'
import { TodoPage } from './pages/TodoPage/TodoPage';
import { FollowersPage } from './pages/FollowersPage/FollowersPage';

// una option es usar el componente Router de react-router-dom
// const router = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<TodoPage/>}/>
//         <Route path="/followers" element={<FollowersPage/>}/>
//       </Routes>
//     </Router>
//   )
// }

// otra opcion es con create browserRouter de react router v-6
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Not Found</div>,
    children: [
      { path: "/", element: <TodoPage/> },
      { path: "/followers", element: <FollowersPage/> },
    ],
  }
])


function App() {
  return (
    <div className="App">
      <Banner />
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
