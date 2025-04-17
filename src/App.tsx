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
    </DishProvider>
  );
}

export default App;
