import { useState } from 'react';
import { LabelInput, PageLayout } from '../../components';

const Contac1t = () => {
  const [submitData, setsubmitData] = useState({
    name: '',
    email: '',
    regarding: '',
    message: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    setsubmitData({
      name: data.get('name'),
      email: data.get('email') || null,
      regarding: data.get('regarding'),
      message: data.get('message'),
    });
  };
  return (
    <PageLayout name="contact" title="Contact Page">
      <p>INSERT HERE A SHORT TEXT XD</p>
      <p>PHONE NUMBER PLACEHOLDER </p>
      <p>EMAIL PLACEHOLDER</p>
      <p>if(exists(office)) then insert map on the left of the screen</p>
      {/* https://blog.logrocket.com/integrating-google-maps-react/ */}
      <form onSubmit={handleSubmit} className="contact-form">
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

export default Contac1t;
