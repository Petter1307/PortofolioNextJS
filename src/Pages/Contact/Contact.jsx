import { useState } from "react";
import { LabelInput } from "../../Components";

const Contact = () => {
  const [submitData, setsubmitData] = useState({
    name: "",
    email: "",
    regarding: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setsubmitData({
      name: data.get("name"),
      email: data.get("email"),
      regarding: data.get("regarding"),
      message: data.get("message"),
    });
  };
  return (
    <div className="page_contact">
      <h1 className="page_title">Contact page</h1>
      <p>INSERT HERE A SHORT TEXT XD</p>
      <p>PHONE NUMBER PLACEHOLDER </p>
      <p>EMAIL PLACEHOLDER</p>
      <p>if(exists(office)) then insert map on the left of the screen</p>
      {/* https://blog.logrocket.com/integrating-google-maps-react/ */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form_sender_details">
          <LabelInput label="Name " name="name" />
          <LabelInput label="Email " name="email" />
          <LabelInput label="Regarding " name="regarding" />
        </div>
        <LabelInput label="Message " name="message" />
        <button>Submit</button>
      </form>
      <button
        onClick={() => {
          console.log(submitData);
        }}
      >
        Console log submit data
      </button>
    </div>
  );
};

export default Contact;
