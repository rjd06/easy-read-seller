// src/pages/SellerRegister.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerSeller } from "../redux/features/sellerSlice";
import styles from "../css/auth.module.css";

export default function SellerRegister() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.seller);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    storeName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerSeller(formData));
  };

  return (
    <div className={styles.authWrapper}>
      {/* Left Section - Form */}
      <div className={styles.authFormSection}>
        <div className={styles.authCard}>
          <h2>Seller Register</h2>
          {error && <div className={styles.errorBox}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Store Name</label>
              <input
                type="text"
                name="storeName"
                value={formData.storeName}
                onChange={handleChange}
                required
              />
            </div>

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
              {loading ? <span className={styles.spinner}></span> : "Register"}
            </button>
          </form>

          <div className={styles.socialBox}>
            <button className={styles.googleBtn}>Continue with Google</button>
            <button className={styles.facebookBtn}>Continue with Facebook</button>
          </div>

          <p className={styles.toggleText}>
            Already have an account?{" "}
            <a href="/seller/login" className={styles.toggleBtn}>
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Right Section - Attractive Text */}
      <div className={styles.authTextSection}>
        <h1>Grow Your Business 🚀</h1>
        <p>
          Join our platform and expand your store to thousands of customers.
          Simple, fast, and secure registration.  
          <br />  
          <strong>Let’s build your success story together!</strong>
        </p>
      </div>
    </div>
  );
}
