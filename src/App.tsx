import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes'
import { MovieProvider } from './context/movie-context'

function App() {

  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  )
}

export default App
