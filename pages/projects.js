import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import itunesPic from '../public/Img/itunes.png';
import memoryPic from '../public/Img/memory.png';
import sneakerPic from '../public/Img/sneaker.png';
import PokedexPic from '../public/Img/pokedex.png';

const Projects = () => {
  return (
    <Layout>
      <section className="container">
        <h1>Projects</h1>
        <div className="projects-grid">
          <div className="project">
            <div className="project-image">
              <Image
                src={memoryPic}
                alt="Project 2"
                height="300"
                width="300"
                className="project-image-round"
              />
            </div>
            <div className="project-details">
              <h2>Memory Game</h2>
              <p>This is a game where you try to find matching tiles by clicking on them to show the hidden images.</p>
              <div className="project-links">
                <Link href="https://magical-memory-matcher-oo0hytyyr-tarickj.vercel.app/" legacyBehavior><a className="project-link">Live Demo</a></Link>
                <Link href="https://github.com/TarickJ/memory.git" legacyBehavior><a className="project-link">Github Repo</a></Link>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <Image
                src={sneakerPic}
                alt="Project 3"
                height="300"
                width="300"
                className="project-image-round"
              />
            </div>
            <div className="project-details">
              <h2>Sneaker Store</h2>
              <p>A simple e-commerce web application that allows users to purchase sneakers.</p>
              <div className="project-links">
                <Link href="https://github.com/TarickJ/Sneakerstore-capstone" legacyBehavior><a className="project-link">Github Repo</a></Link>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <Image
                src={PokedexPic}
                alt="Project 4"
                height="300"
                width="300"
                className="project-image-round"
              />
            </div>
            <div className="project-details">
              <h2>Pokedex</h2>
              <p>A Pokedex that makes use of the Pokemon Api .</p>
              <div className="project-links">
                <Link href="https://pokemon-next-jpazg5blk-tarickj.vercel.app/" legacyBehavior><a className="project-link">Live Demo</a></Link>
                <Link href="https://github.com/TarickJ/pokemon-next.js" legacyBehavior><a className="project-link">Github Repo</a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .container {
          padding: 20px 0;
          background-color: #f7f8fb;
        }

        h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 50px;
          color: #292929;
          text-align: center;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 20px;
        }

        .project {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .project-image {
          padding: 10px;
          text-align: center;
        }

        .project-details {
          padding: 20px;
        }

        .project-details h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #292929;
        }

        .project-details p {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 30px;
          color: #6c6c6c;
        }

        .project-links {
          display: flex;
          justify-content: space-between;
        }

        .project-links a {
          font-size: 16px;
          color: #6c6c6c;
          cursor: pointer;
        }

        .project-links a:hover {
          color: #292929;
        }
      `}</style>
    </Layout>
  );
};

export default Projects;
