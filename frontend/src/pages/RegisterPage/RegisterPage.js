import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import './RegisterPage.css'

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    rating: 0,
    gender: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className='registercontainer'>
      <form className="registerdetails" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          
        </label>
        <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

        <label>
          First Name:{" "}
          
        </label>
        <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />

        <label>
          Last Name:{" "}
          
        </label>
        <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />

        <label>
          Email:{" "}
          
        </label>
        <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        <label>
          Password:{" "}
          
        </label>
        <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        <label>
          Rating:{}
          
        </label>
        <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
          />

        <label>
          Gender:{" "}
          
        </label>
        <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          />
        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        <button className="loginbutton">Register!</button>
      </form>
    </div>
  );
};

export default RegisterPage;
