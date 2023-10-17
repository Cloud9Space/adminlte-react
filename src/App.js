import logo from './logo.svg';
import './App.css';
import AppHeader from './Components/AppHeader'
import Footer from './Components/Footer';
import Home from './Components/Home';
import SideNav from './Components/SideNav';

function App() {
  return (
    <div className='wrapper'>
      <AppHeader />
      <Footer />
      <Home />
      <SideNav />
    </div>
  );
}

export default App;
