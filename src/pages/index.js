import React from "react"
import Layout from "../components/layout"
import Profile from "../components/profile"
import Skill from "../components/skill"
import Works from "../components/works"
import Contact from "../components/contact"


export default function About() {
  return (
    <div>
      <Layout>
        <Profile />
        <Skill />
        <Works />
        <Contact />
      </Layout>
    </div>
  )
}