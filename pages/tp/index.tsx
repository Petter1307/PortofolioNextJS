/* eslint-disable react/button-has-type */
import { HElement } from '@components/HtmlTagsText';
import { PageLayout } from '@components/PageLayout';
import axios from 'axios';
import { useState } from 'react';

const TP = () => {
  const [testv, setTestv] = useState('xd');

  const testf = async () => {
    axios
      .get('http://localhost:5050/tp')
      .then(resp => {
        console.log(resp.data);
        setTestv(resp.data);
        return resp;
      })
      .catch(error => {
        console.log(error);
      });
    console.log('This shit wass called');
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const testform = async (e: any) => {
    e.preventDefault();
    axios
      .post('http://localhost:5050/tp/test', 'xd')
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };
  return (
    <>
      <HElement value="TP" />
      <PageLayout name="TP" title="Tp">
        <p>xdddd {testv}</p>
        <button onClick={() => testf()}>XD</button>
        <form onSubmit={testform} method="post">
          <input type="text" name="test" />
          <input type="submit" value="Submit" />
          <button type="submit">Submit</button>
        </form>
      </PageLayout>
      <HElement value="/TP" />
    </>
  );
};
export default TP;
