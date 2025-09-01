import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { registerSeller } from '../redux/features/sellerSlice';
import { toast } from 'react-toastify';
import "../css/auth.css"

const Register = () => {
    const { loading } = useSelector((state) => state.seller);
    const [form, setForm] = useState({
        name: "",
        email:"",
        password: "",
        storeName: ""
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // handlechange
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    };

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (!form.email) {
            // console.log("email is required");
            toast.warn("Email is required");
            return;
        };
        if (!form.password) {
            // console.log("password is required");
            toast.warn("Password is required");
            return;
        };
        if(!form.name){
            toast.warn("Name is required");
            return;
        };
        if(!form.storeName){
            toast.warn("Store Name is required");
            return;
        }

        dispatch(registerSeller(form));
        
    }

    return (
        <div className='auth'>
            <div className="auth-text">
                <div className="auth-text-content">
                    <h2>Register as a Book Seller</h2>
                    <h1>Start Selling Your Books Today!</h1>
                    <p>Join our network of book sellers and share your stories with thousands of readers. </p>
                    <p>Whether you are an author, publisher, or bookstore, our platform helps you showcase your books to the right audience.</p>
                </div>
            </div>
            <div className="auth-form">
                <form onSubmit={handleSubmit} >
                    <div className="form-header">
                        <h2>Seller Registration</h2>
                    </div>

                    <div className="form-body">


                       
                        <div className="form-control">

                            <input type="text" name='name' placeholder='Enter Full Name' value={form.name} onChange={handleChange} />
                        </div>
                        <div className="form-control">

                            <input type="text" name='storeName' placeholder='Enter Store Name' value={form.storeName} onChange={handleChange} />
                        </div>
                        <div className="form-control">

                            <input type="email" name='email' placeholder='Enter Email' value={form.email} onChange={handleChange} />
                        </div>

                        <div className="form-control">

                            <input type="password" name='password' value={form.password} onChange={handleChange} placeholder='Enter Password' />
                        </div>
                        <div className="form-actions">
                            <button>
                                {
                                    loading ? (
                                        <div className="loading-text">
                                            <div className="spinner"></div>
                                            <p>Registering...</p>
                                        </div>
                                    ) : ("Register")
                                }
                            </button>
                            <p className="switchText">
                                Already have account? <span onClick={() => navigate("/")}>Login</span>
                            </p>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Register