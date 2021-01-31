import React from "react"
import Construction from "../components/construction"
import Layout from "../components/layout"
import Helmet from "react-helmet"

const IndexPage = () => (
  <div id="wrapper">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Musa Arquitectos</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Layout/>
  </div>
)

export default IndexPage
