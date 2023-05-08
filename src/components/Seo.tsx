import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

interface ISeo {
  title: string
}

const Seo = ({ title }: ISeo) => {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log()
  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  )
}

export default Seo
