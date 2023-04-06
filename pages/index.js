import Layout from "../components/Layout";  // import the Layout component
import Link from "next/link";  // import the Link component from Next.js
import { Info, Package, Phone } from 'react-feather';  // import icons from react-feather library

const Index = () => {
  const pages = [  // define an array of objects representing the pages of the portfolio
    {
      id: 1,
      title: 'About',  // title of the page
      description: 'Learn more about our company',  // brief description of the page
      url: '/about',  // url to navigate to the page
      icon: <Info size={24} />  // icon to display alongside the page title
    },
    {
      id: 2,
      title: 'Projects',
      description: 'See our latest projects',
      url: '/projects',
      icon: <Package size={24} />
    },
    {
      id: 3,
      title: 'Contact',
      description: 'Get in touch with us',
      url: '/contact',
      icon: <Phone size={24} />
    }
  ];  

  return (
    <Layout>
      {/* use the Layout component to provide a common structure for all pages */}
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p className="description">
          I am a new web developer finishing off my bootcamp, feel free to explore my portfolio .
        </p>
        <div className="page-previews">
          {pages.map((page) => (
            <div className="page-preview-details" key={page.id}>
              <div className="page-preview-header">
                {page.icon}
                {/* display the icon for the page */}
                <h2>{page.title}</h2>
                {/* display the title of the page */}
              </div>
              <p>{page.description}</p>
              {/* display a brief description of the page */}
              <Link href={page.url} legacyBehavior>
                {/* create a link to navigate to the page */}
                <a className="button">Learn More</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        h1 {
          font-size: 48px;
          font-weight: 700;
          margin-top: 100px;
          margin-bottom: 50px;
          color: #292929;
        }

        .page-preview-details {
          width: calc((100% - 60px) / 3);
          margin: 20px;
          padding: 20px;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        }
        
        .page-preview-details h2 {
          margin-top: 0;
        }
        
        .page-preview-details p {
          margin-bottom: 0;
        }
        
        .page-previews {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .button {
          margin-top: 5px;
          display: inline-block;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          background-color: #292929;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .button:hover {
          background-color: #fff;
          color: #292929;
        }
      `}</style>
    </Layout>
  );
};

export default Index;  // export the component as the default export of the module
