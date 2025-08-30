import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Login = () => {
    const { error, loading } = useSelector((state) => state.seller);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className='auth'>
            <div className="auth-text">
                <div className="auth-text-content">
                    <h1>Partner Panel</h1>
                </div>
            </div>
            <div className="auth-form">
                <form >
                    <div className="form-header">
                        <h2>Welcome Back</h2>
                    </div>

                    <div className="form-body">
                        <div className="error">
                            <p>{error}</p>
                        </div>
                        <div className="form-control">

                            <input type="text" placeholder='Enter Email' />
                        </div>
                        <div className="form-control">

                            <input type="text" placeholder='Enter Password' />
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
                                Create a new account <span>Register</span>
                            </p>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Login