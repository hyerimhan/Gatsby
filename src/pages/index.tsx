import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { PageProps, graphql, Link } from 'gatsby'

const IndexPage = ({ data }: PageProps<Queries.StickersQuery>) => {
  return (
    <Layout title='Welcome to DevStickers 🖐🏻'>
      {data.allContentfulStickerPack.nodes.map((sticker, index) => (
        <article key={index}>
          <GatsbyImage
            image={getImage(sticker.preview?.gatsbyImageData!)!}
            alt={sticker.name!}
          />
          <Link to={`/products/${sticker.id}`}>
            <h2>{sticker.name}</h2>
            <h4>${sticker.price}</h4>
          </Link>
        </article>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`

// Head 컴포넌트는 html의 'head'와 같은 것을 의미한다.
export const Head = () => <Seo title='Home' />
