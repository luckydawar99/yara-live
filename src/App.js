
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Blog from "./Components/page/Blog";
import Login from "./Components/page/Login";
import Priceplane from "./Components/page/Priceplane";
import Products from "./Components/page/Products";
import Responsiveheaders from "./Components/Responsiveheaders"
import Sidebar from "./Components/Sidebar";
import Topbars from "./Components/Topbars";
import Adminpanel from "./Components/adminePannel/Adminpanel";
import Messages from "./Components/page/Messages";
import Profiles from "./Components/page/Profiles";
import Notifications from "./Components/page/Notifications";
import Admin1 from "./Components/adminePannel/Admin1";
import Reviews from "./Components/page/Reviews";
import Events from "./Components/page/Events";
import Team from "./Components/page/Team";

function App() {
  return (
    <>
      <div>
    <Routes>
    <Route path="/" element={<Admin1/>}></Route>
    <Route path="/responsiveheaders" element={<Responsiveheaders/>}></Route>
    <Route path="/header" element={<Header/>}></Route>
    <Route path="/topbar" element={<Topbars/>}></Route>
    <Route path="/sidebar" element={<Sidebar/>}></Route>
    {/* <Route path="/" element={<Login/>}></Route> */}
    <Route path="/home" element={<Adminpanel/>}></Route>
    <Route path="/messages" element={<Messages/>}></Route>
    <Route path="/notifications" element={<Notifications/>}></Route>
    <Route path="/profiles" element={<Profiles/>}></Route>
   
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/priceplane" element={<Priceplane/>}></Route>

  
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/reviews" element={<Reviews/>}></Route>
    <Route path="/events" element={<Events/>}></Route>
    <Route path="/team" element={<Team/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
 
    </Routes>
      
      </div>
    </>
  );
}

export default App;
