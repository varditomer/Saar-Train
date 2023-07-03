// Settings
import './assets/styles/main.scss'
// React
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import { Home } from './pages/Home'
import { Train } from './pages/Train'

function App() {
  return (
    <section className="main-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/train" element={<Train />} />
        </ Routes>
      </ BrowserRouter>
    </section>
  )

}

export default App
