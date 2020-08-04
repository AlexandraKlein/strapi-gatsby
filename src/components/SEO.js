import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description, bodyClass }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDescription,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${siteTitle}`}
      bodyAttributes={{
        class: bodyClass,
      }}
    >
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta
        property="og:description"
        content={description || siteDescription}
      />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={siteUrl} />
    </Helmet>
  )
}

export default SEO
