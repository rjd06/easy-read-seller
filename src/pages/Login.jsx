import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginSeller } from '../redux/features/sellerSlice';
import { toast } from 'react-toastify';
import "../css/auth.css"

const Login = () => {
    const { loading } = useSelector((state) => state.seller);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email, password);
        if (!email) {
            // console.log("email is required");
            toast.warn("Email is required");
            return;
        };
        if (!password) {
            // console.log("password is required");
            toast.warn("Password is required");
            return;
        };

        dispatch(loginSeller({ email, password }));
        console.log(email, password);
    }

    return (
        <div className='auth'>
            <div className="auth-text">
                <div className="auth-text-content">
                    <h2>Welcome Back!</h2>
                    <h1>Partner Panel</h1>
                    <p>Manage your bookstore, track your sales, and reach more readers with ease.</p>
                    <p>Log in to access your seller dashboard and continue growing your business.</p>
                </div>
            </div>
            <div className="auth-form">
                <form onSubmit={handleSubmit} >
                    <div className="form-header">
                        <h2>Seller Login</h2>
                    </div>

                    <div className="form-body">


                        <div className="form-img">
                                <img src="https://www.aceinfoway.com/blog/wp-content/uploads/2020/06/The-Return-of-Froogle-Robinhood-of-Google-Shopping-1.gif" alt="" />
                            </div>

                        <div className="form-control">

                            <input type="email" placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="form-control">

                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                        </div>
                        <div className="form-actions">
                            <button>
                                {
                                    loading ? (
                                        <div className="loading-text">
                                            <div className="spinner"></div>
                                            <p>Logging In...</p>
                                        </div>
                                    ) : ("Login")
                                }
                            </button>
                            <p className="switchText">
                                Create a new account <span onClick={() => navigate("/register")}>Register</span>
                            </p>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Login