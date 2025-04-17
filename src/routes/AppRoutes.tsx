import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Menu from "../pages/Menu/Menu";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Main from "../pages/Menu/MainMenu";
import Starters from "../pages/Menu/Starters";
import Drinks from "../pages/Menu/Drinks";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/menu' element={<Menu />}>
        <Route path='main' element={<Main />} />
        <Route path='starters' element={<Starters />} />
        <Route path='drinks' element={<Drinks />} />
      </Route>
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/*' element={<Navigate to='/home' replace />} />
    </Routes>
  );
}

export default AppRoutes;
