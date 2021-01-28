import React from 'react'
import { Helmet } from 'react-helmet'

interface SeoProps {
  title: string
  description?: string
  lang?: string
  meta?: HTMLMetaElement[]
}

const Seo: React.FC<SeoProps> = ({ title = '', description = '', lang = 'en', meta = [] }) => {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | React Bricks`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@matfrana`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
