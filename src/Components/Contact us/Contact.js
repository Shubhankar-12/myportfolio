import React, { useState, useRef } from "react";
import "./contact.css";
import gif from "./clock.gif";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [Name, setName] = useState("");
  const [mail, setmail] = useState("");
  const [message, setmessage] = useState("");

  const nameChangeHandler = (event) => setName(event.target.value);
  const mailChangeHandler = (event) => setmail(event.target.value);
  const messageChangeHandler = (event) => setmessage(event.target.value);
  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z7e9j4l",
        "template_x02jvja",
        form.current,
        "user_glQD2WAdudlTmSeVFqah7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setmail("");
    setmessage("");
  };

  return (
    <div className="ContactUs" id="contact">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={submitHandler}>
        <div className="form_container">
          <div className="Contact_form">
            <label>Name: </label>
            <br />

            <input
              type="text"
              name="Name"
              id="sender_name"
              placeholder="First Last"
              value={Name}
              onChange={nameChangeHandler}
            />
            <br />
            <label>E-mail: </label>
            <br />
            <input
              type="email"
              name="email"
              id="sender_mail"
              value={mail}
              placeholder="abc@gmail.com"
              onChange={mailChangeHandler}
            />
            <br />
            <label>Message: </label>
            <br />
            <textarea
              name="message"
              id="sender_message"
              placeholder="Your Message Here!"
              value={message}
              onChange={messageChangeHandler}
            ></textarea>
          </div>
          <div className="clock_div">
            <img src={gif} alt="" className="clock" />
          </div>
        </div>
        <div className="btn_div">
          <input type="submit" value="Submit" className="Submit" />
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
