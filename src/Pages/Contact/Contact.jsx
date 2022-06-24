import { LabelInput } from "../../Components";

const Contact = () => {
  return (
    <div className="page_contact">
      <h1 className="page_title">Contact page</h1>
      <p>INSERT HERE A SHORT TEXT XD</p>
      <p>PHONE NUMBER PLACEHOLDER </p>
      <p>EMAIL PLACEHOLDER</p>
      <p>if(exists(office)) then insert map on the left of the screen</p>
      <form className="contact-form">
        <div className="contact-form_sender_details">
          <LabelInput label="Name " />
          <LabelInput label="Email " />
          <LabelInput label="Regarding " />
        </div>
        <LabelInput label="Message " />
      </form>
    </div>
  );
};

export default Contact;
