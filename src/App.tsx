import Navbar from "./components/NavBar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { DishProvider } from "./context/DishContext";
import "./App.css";

function App() {
  return (
    <DishProvider>
      <div className='app-container'>
        <Navbar />
        <AppRoutes />
      </div>
      <footer className='about-footer'>
        <div className='info-footer'>© 2024 Banana Magic</div>
      </footer>
    </DishProvider>
  );
}

export default App;
