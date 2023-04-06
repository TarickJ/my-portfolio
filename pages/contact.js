// Import the required components and libraries
import { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link'
import { GitHub, Linkedin } from 'react-feather';

// Create the Contact component
const Contact = () => {
  // Define state variables using the useState hook
  const [loading, setLoading] = useState(false); // Used to indicate if the email is being sent
  const [success, setSuccess] = useState(false); // Used to indicate if the email was sent successfully
  const [error, setError] = useState(false); // Used to indicate if an error occurred while sending the email
  const [name, setName] = useState(''); // Stores the name entered by the user in the form
  const [email, setEmail] = useState(''); // Stores the email entered by the user in the form
  const [message, setMessage] = useState(''); // Stores the message entered by the user in the form

  // Define the submit handler function
  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Set the loading state to true to indicate that the email is being sent
  
    try {
      // Use the fetch API to send the email to the server
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      setName(''); // Clear the name field
      setEmail(''); // Clear the email field
      setMessage(''); // Clear the message field
      setSuccess(true); // Set the success state to true to indicate that the email was sent successfully
    } catch (error) {
      console.error(error); // Log the error to the console
      setError(true); // Set the error state to true to indicate that an error occurred while sending the email
    }
  
    setLoading(false); // Set the loading state to false to indicate that the email has been sent or an error occurred
  }
  
  // Render the Contact component
  return (
    <Layout>
      <div className="contact">
        <p>Get in touch with me </p>
        <div className="contact-form">
          {/* Render the contact form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <p>Contact Information</p>
          {/* Render the email address and phone number */}
          <p>Email:</p> <a href="mailto:tarickJoseph.audio@gmail.com">tarickJoseph.audio@gmail.com</a>
          <p>Phone:</p> <a href="tel:+0607208937">0607208937</a>
          <div className="social-links">
            <Link href="https://www.linkedin.com/in/tarick-joseph-2b577a270/" legacyBehavior>
              <a target="_blank"><Linkedin /></a>
            </Link>
            <Link href="https://github.com/TarickJ" legacyBehavior>
              <a target="_blank"><GitHub /></a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 50px;
          background-color: #f7f8fb;
          min-height: calc(100vh - 200px);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: 50px;
        }

        p {
          font-size: 1.8rem;
          margin-bottom: 10px;
          font-weight: 600;
        }

        a {
          color: #333;
          font-size: 1.8rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        a:hover {
          color: #555;
        }

        .social-links {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .social-links a {
          margin: 0 10px;
        }

        svg {
          width: 40px;
          height: 40px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
        }
        
        .contact-form h2 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 50px;
        }
        
        .contact-form form {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 600px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 20px;
          width: 100%;
        }
        
        label {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        input,
        textarea {
          padding: 10px;
          font-size: 1.6rem;
          border: none;
          border-radius: 5px;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
          width: 100%;
          margin-bottom: 10px;
        }
        
        textarea {
          height: 150px;
        }
        
        button[type="submit"] {
          background-color: #333;
          color: #fff;
          padding: 10px 20px;
          font-size: 1.6rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        button[type="submit"]:hover {
          background-color: #555;
        }
        
      `}</style>

    </Layout>
  );
};

export default Contact;
