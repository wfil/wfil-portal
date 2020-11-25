import React, { useState, useEffect } from 'react';
import isEmail from 'validator/lib/isEmail';

import Button from '../Button';

import './RequestAccess.scss';

const RequestAccess = () => {
  const [waitingEmail, setWatingEmail] = useState('');
  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/tuemilo_script.js";
    script.async = true;

    document.body.appendChild(script);
  }, [])

  const sendVisit = () => {
    setFormError(false);

    if (!isEmail(waitingEmail)) {
      setFormError(true);
      return;
    }
    if (window && window.Tuemilio) {
      console.log("RequestAccess -> window.Tuemilio", window.Tuemilio)
      window.Tuemilio('createSubscriber', { address: waitingEmail });
      setFormSuccess(true);
    }
  }

  return (
    <div className="request-access-form">
      {formSuccess 
        ? (<p>Thank you! follow our path to mainnet launch in our community channels</p>)
        : (
          <>
            <p>Subscribe for news! 🚀</p>
            <div className="request-access-form-input">
              <input
                className={formError ? 'has-error' : ''}
                type="email"
                value={waitingEmail}
                onChange={({target: { value }}) => setWatingEmail(value)}
                placeholder="Enter your email"
              />
            </div>
            <Button onClick={sendVisit}>Subscribe</Button>
          </>
        )
      }
      
      <div id="t-signup"></div>
    </div>
  )
}
 
export default RequestAccess;