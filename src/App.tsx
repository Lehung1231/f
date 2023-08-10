import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'

const router = createBrowserRouter([
  {
    path: '/', element: <Home />,
  },
  { path: '/add', element: <Add /> },
  { path: '/update/:id', element: <Edit /> }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
