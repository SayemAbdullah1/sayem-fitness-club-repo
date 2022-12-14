import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Exercise from './Components/Exercise/Exercise';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, [])
  
  return (
    <div className="">
      <Header></Header>
      <Exercise></Exercise>
      

    </div>
  );
}

export default App;
