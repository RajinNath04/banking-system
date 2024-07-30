import React from "react";
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
    navigate("/", { replace: true });
  };

  return (
    <div className="reg-section">
      <div className="reg-container">
        <h2>Registration Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <div className="reg-input-container">
              <label>First Name</label>
              <input {...register("fname", { required: true })} />
              {errors.fname && <span>This field is required</span>}
            </div>
            <div className="reg-input-container input-style">
              <label>Last Name</label>
              <input {...register("lname", { required: true })} />
              {errors.lname && <span>This field is required</span>}
            </div>
          </div>
          <div className="input-wrapper">
            <div className="reg-input-container">
              <label>Email</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && <span>Invalid email address</span>}
            </div>
            <div className="reg-input-container input-style">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                type="tel"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phoneNumber && <span>Invalid Phone Number</span>}
            </div>
          </div>
          <div className="input-wrapper">
            <div className="reg-input-container">
              <label>Password</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && (
                <span>Password must be at least 6 characters long</span>
              )}
            </div>
            <div className="reg-input-container input-style">
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
