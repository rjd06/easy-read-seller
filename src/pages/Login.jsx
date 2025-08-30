// src/pages/SellerLogin.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSeller } from "../redux/features/sellerSlice";
import styles from "../css/auth.module.css";

export default function SellerLogin() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.seller);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginSeller(formData));
  };

  return (
    <div className={styles.authWrapper}>
     

      {/* Right Section - Attractive Text */}
      <div className={styles.authTextSection}>
        <h1>Welcome Back 👋</h1>
        <p>
          Manage your store with ease and reach a larger audience.  
          Log in now and continue your growth journey with us.  
          <br />  
          <strong>Success is just a login away!</strong>
        </p>
      </div>

       {/* Left Section - Form */}
      <div className={styles.authFormSection}>
        <div className={styles.authCard}>
          <h2>Seller Login</h2>
          {error && <div className={styles.errorBox}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? <span className={styles.spinner}></span> : "Login"}
            </button>
          </form>

          <div className={styles.socialBox}>
            <button className={styles.googleBtn}>Continue with Google</button>
            <button className={styles.facebookBtn}>Continue with Facebook</button>
          </div>

          <p className={styles.toggleText}>
            Don’t have an account?{" "}
            <a href="/register" className={styles.toggleBtn}>
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
