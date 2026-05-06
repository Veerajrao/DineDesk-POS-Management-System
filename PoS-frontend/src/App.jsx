import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { Home,Auth,Orders, Tables, Menu } from "./pages"
import Header from "./components/shared/Header"

function App() {
  return (
    <>
      <Router>
        <div className="h-screen overflow-hidden flex flex-col">
          <Header />
          <div className="flex-1 overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Auth" element={<Auth />}/>
          <Route path="/Orders" element={<Orders />}/>
          <Route path="/tables" element={<Tables />} />
        <Route path="/menu" element={<Menu />}/>
        <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
        </div>
        </div>
      </Router>
    </>
  )
}

export default App
