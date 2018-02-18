import React from 'react'
import Layout from '../layouts/app'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    if (req) {
      // If `req` is defined, we're rendering on the server and should use
      // MongoDB directly. You could also use the REST API, but that's slow
      // and inelegant.
      const { db } = req
      const list = await db.collection('posts').find().sort({ createdAt: -1 })
        .toArray()
    console.log(list)
      return { list }
    }
    // Otherwise, we're rendering on the client and need to use the API
    const list = await fetch('/posts', {
        method: 'get'
      }).then(response => {
        return response.json()
      }).then(data => {
          return data.posts
      });

    console.log(list)
    return { list }
  }
  constructor(props) {
    super(props)
    this.state = {
      posts: props.list
    }
  }
  render() {
    console.log(this.state.posts)
    let list = this.state.posts.map((item, index) => {
        return <li className="card"><div  className='card-content'><a href={"/posts/" + item.slug}><h5>{item.title}</h5></a></div></li>
    })
    return (
        <Layout>
        <nav className="pink lighten-1" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">Navbar Link</a></li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
              <li><a href="#">Navbar Link</a></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br/><br/>
            <h1 className="header center light-green-text">Successfully installed NCMS!</h1>
            <div className="row center">
              <h5 className="header col s12 light">This Materialize template page was automatically generated</h5>
            </div>
            <div className="row center">
              <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light pink lighten-1">Documentation</a>
            </div>
            <br/><br/>

          </div>
        </div>


        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-green-text"><i className="material-icons">React</i></h2>
                  <h5 className="center">Speeds up development</h5>

                  <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-green-text"><i className="material-icons">Next.js</i></h2>
                  <h5 className="center">User Experience Focused</h5>

                  <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-green-text"><i className="material-icons">Materialize</i></h2>
                  <h5 className="center">Easy to work with</h5>

                  <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                </div>
              </div>
            </div>

          </div>
          <br/><br/>
        <h4 className="thin">Posts</h4>
        <ul className="">
        {list}
      </ul>
        </div>
        </Layout>
    )
  }
}