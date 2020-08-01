import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    jobs: allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        Company
        Date
        Description {
          name
          id
        }
        Position
      }
    }
  }
`

const Jobs = () => {
  const {
    jobs: { nodes: jobs },
  } = useStaticQuery(query)

  const [value, setValue] = React.useState(0)
  const { Company, Date, Description, Position } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                className={`job-btn ${index === value ? "active-btn" : ""}`}
                onClick={() => setValue(index)}
              >
                {item.Company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{Position}</h3>
          <h4>{Company}</h4>
          <p className="job-date">{Date}</p>
          {Description.map(item => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  )
}

export default Jobs
