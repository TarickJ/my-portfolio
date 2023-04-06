import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      {/* Adds the document header */}
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Adds the header component */}
      <Header />

      {/* The main content of the page */}
      <main>{children}</main>

      {/* Adds the footer component */}
      <Footer />

      <style jsx global>{`
        /* Global CSS styles */
        body {
          font-family: 'Helvetica Neue', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Add any additional global styles here */
      `}</style>

      <style jsx>{`
        /* Component-specific CSS styles */
        div {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        main {
          flex: 1;
        }

        
      `}</style>
    </div>
  )
}

export default Layout
