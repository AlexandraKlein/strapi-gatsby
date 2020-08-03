import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiFeaturedVideo {
      nodes {
        video_url
      }
    }
  }
`

const VideoHero = () => {
  const {
    allStrapiFeaturedVideo: { nodes },
  } = useStaticQuery(query)

  const { video_url } = nodes[0]

  return (
    <section className="section section-video">
      <div className="section-center">
        <div>
          <Title title="In The News" />
          <div className="video-container">
            <iframe
              title="Grannies for Masks"
              src={`${video_url}?rel=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoHero
