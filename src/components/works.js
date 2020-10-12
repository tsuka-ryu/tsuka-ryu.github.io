import React from "react"
import worksStyle from './works.module.css'
import myportfolio from "../images/myportfolio.png"
import { Link } from "gatsby"
import DevIcon from "devicon-react-svg";

const devIconStyle = {
  width: "50px",
};

export default function works() {
  return (
    <div className={worksStyle.workswrapper}>
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
                <p>ポートフォリオ</p>
              </div>
              <div className={worksStyle.disc}>
                <p>自分自身のポートフォリオです</p>
                <p>HTML/CSS/React/Gatsby</p>
                <Link to="/">
                  <DevIcon icon="github" style={devIconStyle} />
                </Link>
              </div>
            </div>
          </div>

          <div className={worksStyle.work}>
            <img src={myportfolio} alt="myportfolio" />
            <div className={worksStyle.textcontent}>
              <div className={worksStyle.title}>
                <p>映画レビューサイト</p>
              </div>
              <div className={worksStyle.disc}>
                <p>制作中の映画レビュー投稿サイトです</p>
                <p>HTML/SCSS/Ruby on Rails</p>
                <Link to="/">
                  <DevIcon icon="github" style={devIconStyle} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}