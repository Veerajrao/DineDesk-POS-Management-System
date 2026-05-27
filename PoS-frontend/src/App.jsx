import { BrowserRouter as Router,Routes,Route, useLocation } from "react-router-dom"
import { Home, Auth, Orders, Tables, Menu } from "./pages"
import Header from "./components/shared/Header"
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import UseLoadData from "./hooks/useLoadData";
import Dashboard from "./pages/Dashboard";
import FullScreenLoader from "./components/shared/FullScreenLoader";
//import { Route, Routes } from "react-router-dom";


function Layout(){
  
  const location = useLocation();
  const isLoading = UseLoadData();
  const hideHeaderRoutes = ["/auth"];
  const { isAuth } =useSelector(state => state.user)

  if(isLoading) return <FullScreenLoader/>
  return (
    <>
      <div className="h-screen overflow-y-auto flex flex-col">
          {!hideHeaderRoutes.includes(location.pathname) && <Header />}
          <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }/>
          <Route
            path="/Auth"
            element={isAuth ? <Navigate to="/" /> : <Auth />}
          />
          <Route path="/Orders" element={
            <ProtectedRoutes>
              <Orders />
            </ProtectedRoutes>
          }/>
          <Route path="/tables" element={
            <ProtectedRoutes>
              <Tables />
            </ProtectedRoutes>
          } />
        <Route path="/menu" element={
          <ProtectedRoutes>
            <Menu />
          </ProtectedRoutes>
        }/>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
        </div>
        </div>
    </>
  )
}
function ProtectedRoutes({children}) {
  const { isAuth } = useSelector(state => state.user);
  if (!isAuth){
    return <Navigate to="/auth" />
  }
  return children;
}


function App() {
  return (
    <Router>
      <Layout/>
    </Router>
  )
}

export default App
