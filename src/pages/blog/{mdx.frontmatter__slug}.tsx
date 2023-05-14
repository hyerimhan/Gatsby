import React from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

interface IBlogPost {
  data: Queries.PostDetailQuery
  children: any
}
const BlogPost = ({ data, children }: IBlogPost) => {
  console.log(data)
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  )

  return (
    <Layout>
      <GatsbyImage
        image={image as any}
        alt={data.mdx?.frontmatter?.title!}
      />
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
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export const Head = ({ data }: IBlogPost) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
)
