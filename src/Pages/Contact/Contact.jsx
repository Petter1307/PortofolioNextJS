const Contact = () => {
  return (
    <div className="page_contact">
      <h1>Contact page</h1>
      <form className="contact-form">
        <div className="contact-form_sender_details">
          <label>
            <input placeholder="Name" />
          </label>
          <label>
            <input placeholder="Email" />
          </label>
          <label>
            <input placeholder="Regarding" />
          </label>
        </div>
        <label>
          <input placeholder="Message" />
        </label>
      </form>
    </div>
  );
};

export default Contact;
