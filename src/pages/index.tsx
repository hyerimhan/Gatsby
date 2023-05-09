import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout title='Welcome to DevStickers 🖐🏻'>
      <StaticImage
        height={200}
        src='https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'
        alt='Stickers on the wall'
      />
    </Layout>
  )
}

export default IndexPage

// Head 컴포넌트는 html의 'head'와 같은 것을 의미한다.
export const Head = () => <Seo title='Home' />
