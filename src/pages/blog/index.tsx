import React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { PageProps, graphql, Link } from 'gatsby'

const Blog = ({ data }: PageProps<Queries.BlogPostsQuery>) => {
  console.log(data)

  return (
    <Layout title='Blog'>
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in: {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <hr />
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          author
          category
          title
          date(formatString: "YYYY.MM.DD")
          slug
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`

export const Head = () => <Seo title='Blog' />
