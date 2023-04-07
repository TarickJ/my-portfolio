// Importing necessary components and images
import Layout from '../components/Layout'; // Component for the page layout
import Link from 'next/link'; // Component for client-side navigation
import Image from 'next/image'; // Component for image optimization
import itunesPic from '../public/Img/itunes.png'; // Image for project 1
import memoryPic from '../public/Img/memory.png'; // Image for project 2
import sneakerPic from '../public/Img/sneaker.png'; // Image for project 3
import pokemonPic from '../public/Img/pokemon.png'; // Image for project 4

// Creating a functional component for the Projects page
const Projects = () => {
  // Returning the JSX for the page layout and project information
  return (
    <Layout>
      <section className="container">
        <h1>Projects</h1>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project">
            <div className="project-image">
              <Image
                src={itunesPic}
                alt="Project 1"
                height="300"
                width="300"
                className="project-image-round"
              />
            </div>
            <div className="project-details">
              <h2>Itunes-Search-App</h2>
              <p>The iTunes Search App is a simple React-based web application that allows users to search for media content on iTunes.</p>
              <div className="project-links">
                <Link href="https://itunes-app-searcher.herokuapp.com/" legacyBehavior><a className="project-link">Live Demo</a></Link>
                <Link href="https://github.com/TarickJ/itunes-app.git" legacyBehavior><a className="project-link">Github Repo</a></Link>
              </div>
            </div>
          </div>
          {/* Project 2 */}
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
                <Link href="https://memory-matcher.herokuapp.com/memory" legacyBehavior><a className="project-link">Live Demo</a></Link>
                <Link href="https://github.com/TarickJ/memory.git" legacyBehavior><a className="project-link">Github Repo</a></Link>
              </div>
            </div>
          </div>
          {/* Project 3 */}
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
                src={pokemonPic}
                alt="Project 3"
                height="300"
                width="300"
                className="project-image-round"
              />
            </div>
            <div className="project-details">
              <h2>Pokedex</h2>
              <p>A Pokedex that display's the pokemon from the original series.</p>
              <div className="project-links">
                <Link href="https://pokemon-next-js-six.vercel.app/" legacyBehavior><a className="project-link">Live Demo</a></Link>
                <Link href="https://github.com/TarickJ/pokemon-next.js" legacyBehavior><a className="project-link">Github Repo</a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Styling using CSS-in-JS */}
      <style jsx>{`
  .container {
    padding: 20px 0;
    background-color: #f7f8fb;
    height: 100%;
  }

  h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 50px;
    color: #292929;
    text-align: center;
  }

  .project {
    display: flex;
    padding: 10px;
  }

  .project-image {
    padding: 10px;
    width: 50%;
  }

  .project-details {
    width: 50%;
    padding-left: 50px;
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
  }

  .project-links a {
    margin-right: 20px;
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
