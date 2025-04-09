import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;