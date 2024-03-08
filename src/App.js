import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Task from './component/Task';
import Slide from './component/page3';
import Slider from './component/page2';
function App() {
  return (
    <div className="App">
      <Router>
    
        <Routes>
      
        <Route path ="/" element={<Task/>}/>
        <Route path ="/page2" element={<Slide/>}/>
        <Route path ="/page3" element={<Slider/>}/>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
