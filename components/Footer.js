import Link from 'next/link'; // import Link component from Next.js
import { GitHub, Linkedin } from 'react-feather'; // import GitHub and Linkedin icons from react-feather library

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>Tarick Joseph</h4>
            <p>Web-Developer Portfolio</p>
          </div>
          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              <li>
                <Link href="https://www.linkedin.com/in/tarick-joseph-2b577a270/" legacyBehavior> {/* use Link component to wrap the LinkedIn link */}
                  <a><Linkedin /> Linkedin</a> {/* render the Linkedin icon and text */}
                </Link>
              </li>
              <li>
                <Link href="https://github.com/TarickJ" legacyBehavior> {/* use Link component to wrap the Github link */}
                  <a><GitHub /> Github</a> {/* render the Github icon and text */}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>Phone: 0607208937</p>
            <p>Email: tarickjoseph.audio@gmail.com</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        footer {
          background-color: rgba(255, 196, 0, 0.831);
          padding: 10px 5px;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          padding: 5px;
        }

        .footer-col {
          flex: 1;
          margin-right: 40px;
        }

        h4 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #292929;
        }

        p {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 15px;
          color: #6c6c6c;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          margin-bottom: 10px;
          color: rgba(255, 196, 0, 0.831);
        }

        a {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 15px;
          color: #6c6c6c;
          text-decoration: none;
        }
        a:hover {
          color: #292929;
          text-decoration: none;
        }

      `}</style>
    </footer>
  );
};

export default Footer;
