import React from 'react'
import Link from 'next/link'

export default () => (
    <ul class="side-nav fixed">
      <li><img src='/static/img/ncms-logo.svg' style={{ margin: '8px auto', display: 'block', width: '100px'}}/></li>
      <li><Link href="/admin/posts"><a>Posts</a></Link></li>
      <li><Link href="/admin/users"><a>Users</a></Link></li>
      <li><Link href="/admin/settings"><a>Settings</a></Link></li>
    </ul>
)