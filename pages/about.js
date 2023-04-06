// Import required components and icons
import { Code, Database, GitBranch, Layers, Server } from 'react-feather';
import Layout from '../components/Layout';

// Map the icons to the corresponding skill
const skillIcons = {
  HTML: <Code />,
  CSS: <Code />,
  JavaScript: <Code />,
  React: <Code />,
  Node: <Server />,
  Express: <Server />,
  MongoDB: <Database />,
  Git: <GitBranch />,
  NextJS: <Layers />,
};

// Define the About component
const About = () => (
  // Render the layout
  <Layout>
    {/* // Render the hero section */}
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">About Me</h1>
          <p className="hero-description">
            Welcome to my web development portfolio! My name is Tarick Joseph and I am a web developer based in Cape Town, South Africa. After several years of working as a sound engineer, I made the exciting decision to explore my interest in web development. The dynamic and constantly evolving nature of this field drew me in, and I quickly discovered that it offers a unique opportunity to combine my passion for technology and creativity.
          </p>
          <br/>
          <p className="hero-description">
            To pursue this new career path, I enrolled in a Fullstack Web Development bootcamp through Hyperion Development, where I gained a deep understanding of programming and web development essentials, as well as advanced programming concepts and full-stack development. I have since honed my skills in HTML, CSS, JavaScript, React.js, Node.js, Express.js, Next.js, and MongoDB.
          </p>
          <br/>
          <p className="hero-description">
            Please take a look at my portfolio to see some of my recent projects and feel free to reach out if you have any questions or would like to discuss a potential project.
          </p>
        </div>
      </div>
    </section>
    {/* // Render the education section */}
    <section className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="education-item">
            <h3 className="education-degree">Fullstack Web Development Bootcamp</h3>
            <p className="education-school">
              Hyperion Dev
            </p>
            <p className="education-date">2022-2023</p>
          </div>
          <div className="education-item">
            <h3 className="education-degree">Advanced Diploma - Sound Eginineering</h3>
            <p className="education-school">
              City Varsity
            </p>
            <p className="education-date">2011-2013</p>
          </div>
        </div>
      </div>
    </section>
    {/* // Render the skills section */}
    <section className="skills">
      <h2 className="section-title">Web Development Skills</h2>
      <div className="skill-grid">
         {/* Map the skillIcons object to the corresponding HTML elements */}
        {Object.keys(skillIcons).map((skill, index) => (
          <div key={skill} className="skill-item">
            {skillIcons[skill]}
            <p className="skill-name">{skill}</p>
          </div>
        ))}
      </div>
    </section>
    <style jsx>{`
    .hero {
      background-color: #f7f8fb;
      padding: 200px 0;
      text-align: center;
    }
    
    .hero-title {
      font-size: 64px;
      margin-bottom: 20px;
    }
    
    .hero-description {
      font-size: 20px;
      line-height: 32px;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .education {
      background-color: #ffffff;
      padding: 120px 0;
    }
    
    .section-title {
      font-size: 48px;
      margin-bottom: 50px;
      text-align: center;
    }
    
    .education-grid {
      display: flex;
      justify-content: space-between;
    }
    
    .education-item {
      width: 45%;
    }
    
    .education-degree {
      font-size: 28px;
      margin-bottom: 10px;
    }
    
    .education-school {
      font-size: 20px;
      margin-bottom: 5px;
    }
    
    .education-date {
      font-size: 16px;
      color: #9b9b9b;
      margin-bottom: 40px;
    }

    .skills {
      background-color: #f7f8fb;
      padding: 120px 0;
    }
  
    .skill-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 50px;
    }
  
    .skill-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; /* add this */
      text-align: center; /* add this */
      margin: 0 50px 50px 50px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
      background-color: rgba(255, 196, 0, 0.831);
    }
    
  
    .skill-item:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    }
  
    .skill-name {
      font-size: 24px;
      margin-top: 20px;
      text-align: center;
    }
    
      `}</style>
  </Layout>
);

export default About;
