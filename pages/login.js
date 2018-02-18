import React from 'react'
import Link from 'next/link'
import Layout from '../layouts/app'

export default () => (
  <Layout>
  <div className='container'>
    <div className="row">
      <img src='/static/img/ncms-logo.svg' style={{ margin: '8px auto', display: 'block'}}/>
    </div>
    <div className="row">
      <h3 className="thin">Please log in</h3>
    </div>
    <div className="row">
      <form action="/login" method="post" className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input type='text' name="username" className="validate"/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input type="password" name="password" className="validate"/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input type="submit" className="btn btn-large"/>
          </div>
        </div>
      </form>
    </div>
  </div>
  </Layout>
)