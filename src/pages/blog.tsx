import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/Seo'

const Blog = () => {
  return (
    <Layout title='Blog'>
      <p>The most recent news from my shop.</p>
    </Layout>
  )
}

export default Blog

export const Head = () => <Seo title='Blog' />
