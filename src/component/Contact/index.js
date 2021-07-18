import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({name: "", email: "", message: ""});
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
          }  else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      }
    
    function handleSubmit(e) {
        e.preventDefault();
  
    }


    return (
        <section>
        <h2>Contact me</h2>
        
        <form className="container" id="contact-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Name:</label>
            <input className="form-control" type="text" name="name" defaultValue={name} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email address:</label>
            <input className="form-control" type="email" name="email" defaultValue={email} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">Message:</label>
            <textarea className="form-control" name="message" rows="5" defaultValue={message} onChange={handleChange}/>
          </div>
          {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
          <button type="submit">Submit</button>
        </form>
      </section>
    )
}

export default ContactForm;