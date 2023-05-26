import { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { GitHub, Linkedin } from 'react-feather';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }

    setLoading(false);
  }

  return (
    <Layout>
      <div className="contact">
        <p>Get in touch with me</p>
        <div className="contact-info">
          <p>Contact Information</p>
          <p>Email:</p> <a href="mailto:tarickJoseph.audio@gmail.com">tarickJoseph.audio@gmail.com</a>
          <p>Phone:</p> <a href="tel:+0607208937">0607208937</a>
          <div className="social-links">
            <Link href="https://www.linkedin.com/in/tarick-joseph-2b577a270/" legacyBehavior>
              <div>
                <a target="_blank" rel="noopener noreferrer"><Linkedin /></a>
              </div>
            </Link>
            <Link href="https://github.com/TarickJ" legacyBehavior>
              <div>
                <a target="_blank" rel="noopener noreferrer"><GitHub /></a>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{
        `
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
      `
      }</style>
    </Layout>
  );
};

export default Contact;
