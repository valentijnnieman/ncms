import Head from 'next/head'
import Navbar from '../components/navbar.js'
import Sidebar from '../components/sidebar.js'

export default ({ children }) => (
  <div className='main'>
    <Head>
      <link rel="stylesheet" type="text/css" href="../static/vendor/css/materialize.min.css" />
    </Head>
    <div className='page-with-sidebar'>
      <Navbar />
      {children}
    </div>
    <Sidebar />
    <script src='../static/vendor/js/jquery-3.2.1.min.js' />
    <script src='../static/vendor/js/materialize.min.js' />
    <style jsx>{`
      .page-with-sidebar {
        padding-left: 300px;
      }

      @media only screen and (max-width : 992px) {
        .page-with-sidebar {
          padding-left: 0;
        }
      }
    `}</style>
  </div>
)