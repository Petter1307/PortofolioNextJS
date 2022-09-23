import { useState } from 'react';
import axios from 'axios';
import { LabelInput, PageLayout } from '../../components';

const Contact = () => {
  const [submitData, setsubmitData] = useState({
    name: '',
    email: '',
    regarding: '',
    message: '',
  });
  const handleSaveCall = async saveData => {
    await axios
      .post('http://localhost:5050/contact/', saveData, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setsubmitData({
      name: e.target.name.value,
      email: e.target.email.value,
      regarding: e.target.regarding.value,
      message: e.target.message.value,
    });
    handleSaveCall({
      name: e.target.name.value,
      email: e.target.email.value,
      regarding: e.target.regarding.value,
      message: e.target.message.value,
    });
    console.log(e.target.name.value);
  };
  return (
    <PageLayout name="contact" title="Contact Page">
      <p>INSERT HERE A SHORT TEXT XD</p>
      <p>PHONE NUMBER PLACEHOLDER </p>
      <p>EMAIL PLACEHOLDER</p>
      <p>if(exists(office)) then insert map on the left of the screen</p>
      {/* https://blog.logrocket.com/integrating-google-maps-react/ */}
      <form onSubmit={handleSubmit} className="contact-form" method="post">
        <div className="contact-form_sender_details">
          <LabelInput label="Name " name="name" type="" placeholder="" />
          <LabelInput label="Email " name="email" type="" placeholder="" />
          <LabelInput
            label="Regarding "
            name="regarding"
            type=""
            placeholder=""
          />
        </div>
        <LabelInput label="Message " name="message" type="" placeholder="" />
        <button type="submit">Submit</button>
      </form>
      <button
        type="submit"
        onClick={() => {
          console.log(submitData);
        }}
      >
        Console log submit data
      </button>
    </PageLayout>
  );
};

export default Contact;
