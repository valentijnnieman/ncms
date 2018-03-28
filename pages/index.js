import React from "react";
import Layout from "../layouts/app";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      // If `req` is defined, we're rendering on the server and should use
      // MongoDB directly. You could also use the REST API, but that's slow
      // and inelegant.
      const { db } = req;
      const list = await db
        .collection("posts")
        .find()
        .sort({ createdAt: -1 })
        .toArray();
      console.log(list);
      return { list };
    }
    // Otherwise, we're rendering on the client and need to use the API
    const list = await fetch("/posts", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data.posts;
      });

    console.log(list);
    return { list };
  }
  constructor(props) {
    super(props);
    this.state = {
      posts: props.list
    };
  }
  render() {
    console.log(this.state.posts);
    let list = this.state.posts.map((item, index) => {
      return (
        <li className="card">
          <div className="card-content">
            <a href={"/posts/" + item.slug}>
              <h5>{item.title}</h5>
            </a>
          </div>
        </li>
      );
    });
    return (
      <Layout>
        <nav className="pink lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo">
              NCMS
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#">Navbar Link</a>
              </li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
              <li>
                <a href="#">Navbar Link</a>
              </li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br />
            <br />
            <h1 className="header center light-green-text">
              Successfully installed NCMS!
            </h1>
            <div className="row center">
              <h5 className="header col s12 light">
                This template page was automatically generated @ pages/index.js!
              </h5>
            </div>
            <div className="row center">
              <a
                href="https://github.com/valentijnnieman/ncms"
                id="download-button"
                className="btn-large waves-effect waves-light pink lighten-1"
              >
                Documentation
              </a>
            </div>
            <br />
            <br />
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text">React</h2>
                  <h5 className="center">Single page application</h5>
                  <p className="light">
                    By using React we ensure a great, fast, user experience with
                    a great eco-system of libraries and open source code.
                    Everything is rendered in a single page, so it's very fast!
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center yellow-text">Next.js</h2>
                  <h5 className="center">Server Side Rendering</h5>

                  <p className="light">
                    We use Next.js for server-side rendering our React
                    application. This means great SEO, and a more stable
                    experience overall!
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center red-text">Materialize</h2>
                  <h5 className="center">Easy to work with</h5>

                  <p className="light">
                    By including the Materialize CSS framework, developing is
                    much easier and it looks great too! Materialize is based on
                    Google's Material Design.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h4 className="thin">Posts</h4>
          <ul className="">{list}</ul>
        </div>
      </Layout>
    );
  }
}
