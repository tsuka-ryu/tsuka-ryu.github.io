import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/js/layout"
import Profile from "../components/js/profile"
import Skill from "../components/js/skill"
import Works from "../components/js/works"
import Contact from "../components/js/contact"

export default function About() {
  return (
    <div>
      <Helmet>
        <title>@tsuka_ryu ポートフォリオ</title>
        <meta name="description" content="このページは@tsuka_ryuのポートフォリオです" />
        <html lang="ja" />
      </Helmet>
      <Layout>
        <Profile />
        <Skill />
        <Works />
        <Contact />
      </Layout>
    </div>
  )
}