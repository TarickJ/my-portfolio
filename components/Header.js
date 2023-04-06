// import the Link component from the next/link module
import Link from 'next/link'

// define a functional component called Header
const Header = () => {
  // render the component's content
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          {/* create a navigation item with a link to the homepage */}
          <li className="nav-item">
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          {/* create a navigation item with a link to the about page */}
          <li className="nav-item">
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          {/* create a navigation item with a link to the projects page */}
          <li className="nav-item">
            <Link href="/projects" legacyBehavior>
              <a>Projects</a>
            </Link>
          </li>
          {/* create a navigation item with a link to the contact page */}
          <li className="nav-item">
            <Link href="/contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .header {
          background-color: #333;
          color: #fff;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
          padding: 1rem;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-list {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .nav-item a {
          margin: 0 1rem;
          color: #fff;
          text-decoration: none
        }

        .nav-item:hover a {
          color: rgba(255, 196, 0, 0.831);
        }
      `}</style>
    </header>
  )
}

// export the Header component as the default export of this module
export default Header
