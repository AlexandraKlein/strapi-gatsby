import React from "react"
import Member from "./Member"
import Title from "./Title"
import { Link } from "gatsby"

const Members = ({ members, title, showLink }) => {
  return (
    <section className="members-page bg-grey">
      <section className="section section-center ">
        <Title title={title} />
        <div className="member-content">
          {members.map(member => (
            <Member key={member.id} member={member} />
          ))}
        </div>
        {showLink && (
          <Link to="/members" className="btn center-btn">
            All Members
          </Link>
        )}
      </section>
    </section>
  )
}

export default Members
