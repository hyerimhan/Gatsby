import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout title='Welcome to DevStickers 🖐🏻'>
      <div />
    </Layout>
  )
}

export default IndexPage

// Head 컴포넌트는 html의 'head'와 같은 것을 의미한다.
export const Head = () => <Seo title='Home' />
