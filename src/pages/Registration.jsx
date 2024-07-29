import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../assets/Registration.css";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = (data) => {
    localStorage.setItem(
      data.email,
      JSON.stringify({
        name: data.name,
        password: data.password,
      })
    );
    console.log(JSON.parse(localStorage.getItem(data)));
    navigate("/", { replace: true });
  };

  return (
    <div className="login-section">
      <div className="login-container">
        <h2>Registration Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <label>First Name</label>
            <input {...register("fname", { required: true })} />
            {errors.fname && <span>This field is required</span>}
          </div>
          <div className="input-container">
            <label>Last Name</label>
            <input {...register("lname", { required: true })} />
            {errors.lname && <span>This field is required</span>}
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span>Invalid email address</span>}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <span>Password must be at least 6 characters long</span>
            )}
          </div>
          <div className="input-container">
            <label>Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </div>
          <button type="submit">Register</button>
          <hr
            style={{
              height: "2px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "gray",
              marginTop: "20px",
            }}
          ></hr>
          <button
            type="submit"
            onClick={() => navigate("/", { replace: true })}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
