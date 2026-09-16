import React, { useState } from "react";
import "./SignIn.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // 2. Handle input changes dynamically
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Updates only the modified field
        }));
    };

    // 3. Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the browser from reloading the page
        console.log('Submitted Data:', formData);
        const url = `${import.meta.env.VITE_SERVER_URL}/api/signin`;

        const response = await axios.post(url, formData, {
            withCredentials: true
        });
        console.log(response.data)
        navigate("/")
    };
    return (
        <main className="signInPage">

            <div className="signInCard">

                <div className="signInHeader">
                    <span>Quran Academy</span>

                    <h1>Welcome Back</h1>

                    <p>
                        Sign in to continue your learning journey.
                    </p>
                </div>


                <form className="signInForm" onSubmit={handleSubmit}>

                    <div className="inputGroup">
                        <label htmlFor="username">
                            Email Address/username
                        </label>

                        <input
                            name="username"
                            id="username"
                            placeholder="Enter your email"
                            onChange={handleChange}
                        />
                    </div>


                    <div className="inputGroup">
                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            name="password"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                    </div>


                    <div className="formOptions">

                        <label className="rememberMe">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>

                        <a href="#">
                            Forgot Password?
                        </a>

                    </div>


                    <button
                        type="submit"
                        className="signInButton"
                    >
                        Sign In
                    </button>

                </form>


                <div className="signInFooter">
                    <p>
                        Don't have an account?
                        <a href="#"> Create an account</a>
                    </p>
                </div>

            </div>

        </main>
    );
};

export default SignIn;