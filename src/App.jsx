import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { Home,Auth,Orders } from "./pages"
import Header from "./components/shared/Header"

function App() {
  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Auth" element={<Auth />}/>
          <Route path="/Orders" element={<Orders />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
