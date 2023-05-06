import axios from "axios";
import { useState } from "react";
// import "./../style/Auth.css";
import { API_URL } from "../consts";
import "../Index.css";
import "../style/Auth.css";
import { Button } from "react-bootstrap";

const Register = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [error, setError] = useState("");
  const initialFormData = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    profile_image: "",
    password: "",
    password_confirmation: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const onChange = (e) => {
    setConfirmationMessage("");
    setError("");
    console.log({ ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(`http://127.0.0.1:8000/auth/register/`, formData);
      console.log(formData);
      console.log(res);
      setConfirmationMessage(res.data.message);
      setFormData(initialFormData);
    } catch (err) {
      console.log(err.response);
      setError(err.response);
      console.log(err);
    }
  };
  const inputFields = [
    {
      placeholder: "username",
      name: "username",
      type: "string",
    },
    {
      placeholder: "first_name",
      name: "first_name",
      type: "string",
    },
    {
      placeholder: "last_name",
      name: "last_name",
      type: "string",
    },
    {
      placeholder: "Email",
      name: "email",
      type: "email",
    },
    {
      placeholder: "profile_image",
      name: "profile_image",
      type: "string",
    },
    {
      placeholder: "password",
      type: "password",
      name: "password",
    },
    {
      placeholder: "password_confirmation",
      name: "password_confirmation",
      type: "password",
    },
  ];

  return (
    <div className="viewRegister">
      <video
        autoPlay
        loop
        className="backVideo"
        src="../pages/pexels.mp4"
      ></video>
      
      {/* {confirmationMessage ? (
        <h4 className="alert-success">{confirmationMessage}</h4>
      ) : error ? (
        <h4 className="alert-failure">{error}</h4>
      ) : null} */}
      <h2>Register</h2>

      <form className="auth-form" onSubmit={onSubmit}>
        {inputFields.map((input) => {
          return (
            <input
              placeholder={input.placeholder}
              name={input.name}
              type={input.type}
              value={formData.name}
              onChange={onChange}
            />
          );
        })}

        <Button type="submit"> Register!</Button>
      </form>
    </div>
  );
};

export default Register;

// When a user enters their information into the form and clicks the "Register" button,
// the code sends a request to a server using Axios to register the user's information.
// The page will indicate whether the registration has been successful or whether there has been an error.

// It is a form requesting username, email, password, and confirm password.