import React from 'react'
import Layout from '../../layouts/admin'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    if (req) {
      // If `req` is defined, we're rendering on the server and should use
      // MongoDB directly. You could also use the REST API, but that's slow
      // and inelegant.
      const { db } = req
      const list = await db.collection('posts').find().sort({ createdAt: -1 })
        .toArray()
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

    return { list }
  }
  constructor(props) {
    super(props)
    this.state = {
      posts: props.list
    }
  }
  getPosts() {
    return fetch('/posts', {
      method: 'get'
    }).then(response => {
      return response.json()
    }).then(data => {
      this.setState({
        posts: data.posts
      })
    })
  }
  removePost(slug) {
    return fetch(`/posts/${slug}`, {
      method: 'delete'
    })
    .then(response => {
      this.getPosts()
    })
  }
  updatePost(post) {
    post.preventDefault()
    const title = post.target.title.value
    const slug = post.target.slug.value
    const newSlug = post.target.newSlug.value
    const content = post.target.content.value

    return fetch(`/posts/${slug}`, {
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        "title": title,
        "slug": slug, 
        "newSlug": newSlug, 
        "content": content
      })
    })
    .then(response => {
      this.getPosts()
    })
  }
  createPost(slug) {
    return fetch(`/posts/create`, {
      method: 'post'
    })
    .then(response => {
      this.getPosts()
    })
  }
  render() {
    let list = this.state.posts.map((item, index) => {
      return <li className="card" key={index}>
        <div className="card-content">
          <form onSubmit={this.updatePost.bind(this)}>
            <input type='hidden' name='slug' value={item.slug} />
            <label htmlFor="title">Title</label>
            <input type='text' name='title' defaultValue={item.title} />
            <label htmlFor="newSlug">Slug</label>
            <input type='text' name='newSlug' defaultValue={item.slug} />
            <label htmlFor="content">Content</label>
            <textarea name='content' 
              className='materialize-textarea' 
              defaultValue={item.content}
              cols="100"
            />
            <div className='row'>
              <div className='col s2'>
                <input type='submit' className='btn' value="update" />
              </div>
            </div>
            </form>
            <div className='row'>
              <div className='col s2'>
                <button className='btn red' onClick={() => this.removePost(item.slug)}>Remove</button>
              </div>
              <div className='col s2 offset-s10'>
                <a className='btn yellow' href={'/posts/' + item.slug}>Preview</a>
              </div>
            </div>
          </div>
        </li>
    })
    return <Layout>
          <div className='container'>
            <h2 className='thin'>Settings</h2>
          </div>
        </Layout>
  }
}