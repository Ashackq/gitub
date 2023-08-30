import React, { useState } from 'react';
import './conn.css';
import {db} from '../../firebaseConfig';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');
    
        const handleSubmit = async(e) => {
        e.preventDefault();
    
        try{
      
          const newMessage = {
            name,
            email,
            message
          };
          await db.collection("connects").add(newMessage);
          alert("Information Successfully Added");

          setSubmitStatus('success');
          setName('');
          setEmail('');
          setMessage('');
          
        }
        catch(error)
        {
            console.error('Error sending message:', error);
            setSubmitStatus('error');
        };
      };
    
  
    return (
      <div className="contact-us-container">
        <h1 className="contact-us-header">Contact Us</h1>
        <p className="contact-info">If you have any questions or feedback<br/> feel free to contact us:</p>
        <p className="contact-info">Phone: 7069928282</p>
        <p className="contact-info">Address: 3rd Floor, Maitri Building, MIT-WPU </p>
  
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
  
          <label className="form-label">Your Email</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
  
          <label className="form-label">Your Message</label>
          <textarea
            className="form-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
  
          <button type="submit" className="form-submit">
            Send Message
          </button>
  
          {submitStatus === 'success' && (
            <p className="form-success">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="form-error">Failed to send message. Please try again later.</p>
          )}
        </form>
      </div>
    );
  };
  
  export default ContactUs;