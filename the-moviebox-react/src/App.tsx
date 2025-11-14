import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import { Navbar } from "./components/layout/navbar"
import { MovieContent } from "./cases/movies/components/movie-content"
import { Highlight } from "./components/layout/highlight"
import { MovieContextProvider } from "./cases/movies/context/movie-context"

function App() {

  return (
    <>
    <Header/>
    <main>
      <MovieContextProvider>
      <Highlight/>
      <Navbar/>
      <MovieContent/>
      </MovieContextProvider>

    </main>
    <Footer/>
    </>
  )
}

export default App
