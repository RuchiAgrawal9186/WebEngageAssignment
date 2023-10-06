
import './App.css';
import { useState } from "react";

function App() {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [errors, setErrors] = useState({ email: '', mobile: '', countryCode: '' });
  return (
    <div className="App">

<div className="maindiv">
        <div className="leftdiv">
          image
        </div>
        <div className="rightdiv">
          <img src="" alt="logo"/>
          <h2>Get a FREE</h2>
          <h5>Consultation with an expert</h5>
          <br/>
          <form onSubmit={handlesubmit}>
            <input type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required/>
          <br/><br/>
          <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          required
        >
          <option value="">+91</option>
          <option value="+1">+1</option>
          <option value="+91">+91</option>
          {/* Add more country codes as needed */}
        </select>
          <input type="tel"
          pattern="[0-9]{10}"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required/>

            </form>
        </div>
        </div>

      
    </div>
  );
}

export default App;
