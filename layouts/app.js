import Head from 'next/head'

export default ({ children }) => (
  <div className='main'>
    <Head>
      <link rel="stylesheet" type="text/css" href="../static/vendor/css/materialize.min.css" />
    </Head>
    {children}
    <script src='../static/vendor/js/jquery-3.2.1.min.js' />
    <script src='../static/vendor/js/materialize.min.js' />
  </div>
)