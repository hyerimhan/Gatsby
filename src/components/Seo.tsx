import React from 'react'

interface ISeo {
  title: string
}

const Seo = ({ title }: ISeo) => {
  return <title>{title} | DevStickers!</title>
}

export default Seo
