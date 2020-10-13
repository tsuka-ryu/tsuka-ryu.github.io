import React from "react"
import worksStyle from '../css/works.module.css'
import myportfolio from "../../images/myportfolio.png"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Works() {
  return (
    <div className={worksStyle.workswrapper} id="works">
      <div className={worksStyle.container}>
        <div className={worksStyle.heading}>
          <h1>WORKS</h1>
          <h4>制作物です</h4>
        </div>
        <div className={worksStyle.works}>
          <div className={worksStyle.work}>
            <img src={myportfolio} alt="myportfolio" />
            <div className={worksStyle.textcontent}>
              <div className={worksStyle.title}>
                <h4>ポートフォリオ</h4>
              </div>
              <div className={worksStyle.disc}>
                <p>自分自身のポートフォリオです</p>
                <p>HTML/CSS/React/Gatsby</p>
                <Link to="/" className={worksStyle.icon}>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
              </div>
            </div>
          </div>

          <div className={worksStyle.work}>
            <img src={myportfolio} alt="myportfolio" />
            <div className={worksStyle.textcontent}>
              <div className={worksStyle.title}>
                <h4>映画レビューサイト</h4>
              </div>
              <div className={worksStyle.disc}>
                <p>制作中の映画レビュー投稿サイトです</p>
                <p>HTML/SCSS/Ruby on Rails</p>
                <Link to="/" className={worksStyle.icon}>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}