import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import axios from "axios"

const Contact = () => {
  const [serverState, setServerState] = React.useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://formspree.io/xjvalgzq",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(
          true,
          "Thank you! Your message has been sent!",
          form
        )
      })
      .catch(r => {
        handleServerResponse(
          false,
          "Something went wrong. Please try again.",
          form
        )
      })
  }
  return (
    <Layout>
      <SEO title="Contact" description="Contact Me" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>

          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              />
              <button
                className="btn submit-btn"
                type="submit"
                disabled={serverState.submitting}
              >
                Submit
              </button>
              {serverState.status && (
                <div className="form-message">
                  <p className={!serverState.status.ok ? "error" : "success"}>
                    {console.log({ serverState })}
                    {serverState.status.msg}
                  </p>
                </div>
              )}
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Contact
