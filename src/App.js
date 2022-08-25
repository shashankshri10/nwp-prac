import PlainEvents from './comps/PlainEvents';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    localStorage.clear(); 
    localStorage.setItem('loginStat',true); 
    localStorage.setItem('regStat',false); 
  },[]);
  return (
    <div className="App">
      <PlainEvents name="Two For A Tango" />
      
    </div>
  );
}

export default App;
