import React from 'react'
import Layout from '../layouts/app'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    if(req) {
        const slug = req.slug
        const {db} = req
        const post = await db.collection('posts').findOne({"slug": slug})
        return {post}
    }
  }
  render() {
    return <Layout>
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.props.post.content}} />
            </div>
        </Layout>
  }
}