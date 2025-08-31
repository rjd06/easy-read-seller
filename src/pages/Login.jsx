import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginSeller } from '../redux/features/sellerSlice';


const Login = () => {
    const { error, loading } = useSelector((state) => state.seller);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email, password);
        if (!email) {
            console.log("email is required");
            return;
        };
        if (!password) {
            console.log("password is required");
            return;
        };

        dispatch(loginSeller({email, password}));
        console.log(email, password);
    }

    return (
        <div className='auth'>
            <div className="auth-text">
                <div className="auth-text-content">
                    <h1>Partner Panel</h1>
                </div>
            </div>
            <div className="auth-form">
                <form onSubmit={handleSubmit} >
                    <div className="form-header">
                        <h2>Welcome Back</h2>
                    </div>

                    <div className="form-body">
                        {
                            error && <div className="error">
                                <p>{error}</p>
                            </div>
                        }

                        <div className="form-control">

                            <input type="text" placeholder='Enter Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="form-control">

                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
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