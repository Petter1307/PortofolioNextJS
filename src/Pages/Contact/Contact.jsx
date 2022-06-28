import { useCallback, useState } from "react";
import { LabelInput } from "../../Components";
// const initialData = ;
const Contact = () => {
  const [submitData, setsubmitData] = useState({
    name: "",
    email: "",
    regarding: "",
    message: "",
  });
  // const handleSubmit = ({ name, email, regarding, message }) => {
  //   setsubmitData({ name, email, regarding, message });
  // };
  const { name, email, regarding, message } = submitData;
  const onSubmit = useCallback((data) => {
    console.log(data.name, data.message);
  }, []);

  const handleInputChange = useCallback(
    (key) => (value) => {
      setsubmitData({ ...submitData, [key]: value });
    },
    []
  );

  // const handleInputChange = (key) => (value) => {
  //   setsubmitData({ ...submitData, [key]: [value] });
  // };
  // const handleInputChange = (v) => {
  //   console.log(v);
  // };
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(submitData);
    },
    [submitData, onSubmit]
  );
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
          <LabelInput label="Name " onChange={handleInputChange("name")} />
          <LabelInput label="Email " onChange={handleInputChange("email")} />
          <LabelInput
            label="Regarding "
            onChange={handleInputChange("regarding")}
          />
        </div>
        <LabelInput label="Message " onChange={handleInputChange("message")} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
