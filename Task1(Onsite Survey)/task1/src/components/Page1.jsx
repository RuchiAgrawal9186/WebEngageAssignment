import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Page1 = () => {

    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [errors, setErrors] = useState({ email: '', mobile: '', countryCode: '' });

    const navigate = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault();



        if (!email || !mobile || !countryCode) {
            setErrors({
                email: !email ? 'Required Field' : '',
                mobile: !mobile ? 'Required Field' : '',
                countryCode: !countryCode ? 'Required Field' : ''
            });
        }
        else {
            let obj = {
                email: email,
                mobile: mobile,
                countryCode: countryCode
            }
            console.log(obj)
            localStorage.setItem("userdetails", JSON.stringify(obj))
            navigate("/page2")
        }
    }
    return (
        <>
            <div className="maindiv">
                <div className="leftdiv">
                    <img src="../images/image1.png" alt="yellow" style={{ width: "70%" }} />
                </div>
                <div className="rightdiv">
                    <img src="../images/logo.png" alt="logo" />
                    <h1>Get a FREE</h1>
                    <h3>Consultation with an expert</h3>
                    <br />
                    <form onSubmit={handlesubmit}>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"

                        />
                        <br />
                        {errors.email && <span className="error" style={{ color: "red" }}>{errors.email}</span>}
                        <br />
                        <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}

                        >
                            <option value="">code</option>
                            <option value="+91">+91</option>
                            <option value="+91">+76</option>
                            {/* Add more country codes as needed */}
                        </select>
                        <input type="tel"
                            pattern="[0-9]{10}"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder='enter your moile'
                        />
                        <br />
                        {errors.mobile && errors.countryCode && <span className="error" style={{ color: "red" }}>{errors.mobile}</span>}
                        <br /><br />

                        <button type="submit" style={{ backgroundColor: "grey", color: "white", padding: "10px 15px" }}>TALK TO US ➜</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Page1