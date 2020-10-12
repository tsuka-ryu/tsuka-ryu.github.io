import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Profile from "../components/profile"
import Skill from "../components/skill"
import Works from "../components/works"
import Contact from "../components/contact"

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