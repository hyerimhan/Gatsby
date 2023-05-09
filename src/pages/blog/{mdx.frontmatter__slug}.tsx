import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'

interface IBlogPost {
  data: Queries.PostDetailQuery
  children: any
}
const BlogPost = ({ data, children }: IBlogPost) => {
  console.log(data)

  return (
    <Layout title=''>
      <div>{children}</div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        category
        date
        slug
        title
      }
    }
  }
`

export const Head = ({ data }: IBlogPost) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
)
