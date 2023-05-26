import Layout from "../components/Layout";
import Link from "next/link";
import { Info, Package, Phone } from 'react-feather';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Index = () => {
  const pages = [
    {
      id: 1,
      title: 'About',
      description: 'Learn more about our company',
      url: '/about',
      icon: <Info size={24} />
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
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p className="description">
          I am a new web developer finishing off my bootcamp, feel free to explore my portfolio.
        </p>
        <div className="carousel-wrapper">
          <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} showIndicators={false} showArrows={true} emulateTouch={true} swipeable={true} centerMode={true} centerSlidePercentage={80}>
            {pages.map((page) => (
              <div className="page-preview-details" key={page.id}>
                <div className="page-preview-header">
                  {page.icon}
                  <h2>{page.title}</h2>
                  <p>{page.description}</p>
                  <Link href={page.url} legacyBehavior>
                    <a className="button">Learn More</a>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 960px;
          margin: 0 auto;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        h1 {
          font-size: 4rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 2rem;
          color: #292929;
        }

        .carousel-wrapper {
          border-radius: 5px;
          box-shadow: -10px 0px 10px -10px rgba(0, 0, 0, 0.5),
                       10px 0px 10px -10px rgba(0, 0, 0, 0.5); /* Add shadow to the sides of the carousel wrapper */
        }
        

        .page-preview-details {
          width: 100%;
          margin: 1rem 0.5rem;
          padding: 2rem;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
          background-color: #f5f5f5;
        }

        .page-preview-details:nth-child(2) {
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        }

        .page-preview-details h2 {
          margin-top: 0;
        }

        .page-preview-details p {
          margin-bottom: 0;
        }

        .button {
          display: inline-block;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          background-color: #292929;
          text-decoration: none;
          padding: 1rem 2rem;
          border-radius: 5px;
          transition: all 0.3s ease;
          max-width: 100%;
          width: fit-content;
          margin-top: 1rem;
        }

        .button:hover {
          background-color: #fff;
          color: #292929;
        }

        .carousel .control-arrow {
          background-color: #000;
        }

        .carousel .control-arrow:hover {
          background-color: #000;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
