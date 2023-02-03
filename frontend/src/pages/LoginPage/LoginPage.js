import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className='logincontainer'>
      <form className="logindetails" onSubmit={handleSubmit}>
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
          Password:{" "}
          
        </label>
        <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        <Link to="/register"><button className="loginbutton">Click to register!</button></Link>
        <button className="loginbutton">Login!</button>
      </form>
    </div>
  );
};

export default LoginPage;
