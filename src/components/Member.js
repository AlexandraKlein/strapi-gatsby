import React from "react"
import Image from "gatsby-image"

const Member = ({ member }) => {
  return (
    <div className="member-container" key={member.id}>
      <div className="member-img">
        <Image fluid={member.image.childImageSharp.fluid} />
      </div>
      {member.name && <h5>{member.name}</h5>}
      {member.location && <small>{member.location}</small>}
    </div>
  )
}

export default Member
