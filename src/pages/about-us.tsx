import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/Seo'

const AboutUs = () => {
  return (
    <Layout title='About Us'>
      <p>we are the happies sticker store</p>
    </Layout>
  )
}

export default AboutUs

export const Head = () => <Seo title='About us' />
