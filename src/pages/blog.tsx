import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { PageProps, graphql } from 'gatsby'

const Blog = ({ data }: PageProps<Queries.BlogTitlesQuery>) => {
  console.log(data)

  return (
    <Layout title='Blog'>
      <ul>
        {data.allFile.nodes.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title='Blog' />
