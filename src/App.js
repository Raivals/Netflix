import { useEffect } from "react"
import ApiMovie from "./ApiMovie"
import "./App.css"

function App() {
  // Dès qu'on arrive sur la pagge d'acceuil appel fonction qui ramène la liste des fils (1fois)

  useEffect(() => {
    const loadAllMovies = async () => {
      // attend qqchose de la fonction getMovies
      let moviesList = await ApiMovie.getHomeMovies()
    }
  })
  return <div className="App">HELLO WORLD </div>
}

export default App
