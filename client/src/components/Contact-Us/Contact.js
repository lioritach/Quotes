import React, { useState, useRef } from "react";
import "./Contact.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("sds");
    emailjs
      .sendForm(
        "service_mihyvj1",
        "template_eaml9yq",
        form.current,
        "user_CALzk8CkBDgYbk29QjeYY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="contact">
        <div className="contact-box">
          <h1>צרו קשר</h1>

          <input
            type="text"
            name="fullName"
            placeholder="שם מלא"
            className="fullname_input"
          />
          <input
            type="email"
            name="email"
            placeholder="מייל"
            className="email__input"
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="תוכן ההודעה"
            className="message__input"
          ></textarea>
          <div>
            <button type="submit">Send</button>
          </div>
          <div>{result ? "ההודעה נשלחה בהצלחה!" : null}</div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
