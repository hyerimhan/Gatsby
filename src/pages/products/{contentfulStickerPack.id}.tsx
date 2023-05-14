import React from 'react'
import Layout from '../../components/Layout'
import { PageProps, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProductDetail = ({ data }: PageProps<Queries.ProductQuery>) => {
  const image = getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!)

  return (
    <Layout title={data.contentfulStickerPack?.name!}>
      <GatsbyImage
        image={image!}
        alt={data.contentfulStickerPack?.name!}
      />
      <h2>${data.contentfulStickerPack?.price}</h2>
    </Layout>
  )
}

export default ProductDetail

export const query = graphql`
  query Product($id: String) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 450, placeholder: BLURRED)
      }
    }
  }
`
