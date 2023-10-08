
import './App.css';
import { useState } from "react";
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Task2 from './components/Task2';
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';

function App() {
  const [formData, setFormData] = useState(null);

  const navigate = useNavigate()

  

  const handleClick = () =>{
    return navigate("/task2")
  }
  return (
    <div className="App">
      <button onClick={handleClick}>click for task 2</button>
      <AllRoutes></AllRoutes>
      {/* {!formData ? (
        <Page1 onSubmit={handleSubmit} />
      ) : (
        <Page2 data={formData} />
      )} */}
    </div>
    );
    }

  export default App;
