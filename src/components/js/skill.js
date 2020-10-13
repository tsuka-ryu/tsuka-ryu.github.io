import React from "react"
import DevIcon from "devicon-react-svg";
import skillstyle from '../css/skill.module.css'

const devIconStyle = {
  width: "80px",
};

export default function Skill() {
  return (
    <div className={skillstyle.skillWrapper} id="skill">
      <div className={skillstyle.container}>
        <div className={skillstyle.heading}>
          <h1>SKILL</h1>
          <h4>未経験ですが頑張ります！</h4>
        </div>
        <div className={skillstyle.skills}>

          <div className={skillstyle.skill}>
            <div className={skillstyle.skillicon}>
              <DevIcon icon="html5" style={devIconStyle} />
            </ div>
            <div className={skillstyle.textcontent}>
              <div className={skillstyle.title}>
                <p>HTML5&CSS</p>
              </div>
                <div className={skillstyle.rate}>
                  <p>★★★★☆</p>
              </div>
              <div className={skillstyle.disc}>
                ＊参考＊<br></br>
                Progate HTML & CSS<br></br>
                Progate Sass<br></br>
              </div>
            </div>
          </div>

          <div className={skillstyle.skill}>
            <div className={skillstyle.skillicon}>
            <DevIcon icon="javascript" style={devIconStyle} />
            </ div>
            <div className={skillstyle.textcontent}>
              <div className={skillstyle.title}>
                <p>JavaScript</p>
              </div>
                <div className={skillstyle.rate}>
                  <p>★★★☆☆</p>
              </div>
              <div className={skillstyle.disc}>
                ＊参考＊<br></br>
                Progate JavaScript
              </div>
            </div>
          </div>

          <div className={skillstyle.skill}>
            <div className={skillstyle.skillicon}>
            <DevIcon icon="nodejs" style={devIconStyle} />
            </ div>
            <div className={skillstyle.textcontent}>
              <div className={skillstyle.title}>
                <p>Node.js</p>
              </div>
                <div className={skillstyle.rate}>
                  <p>★★★☆☆</p>
              </div>
              <div className={skillstyle.disc}>
                ＊参考＊<br></br>
                Progate Web開発パス（Node.js)
              </div>
            </div>
          </div>

          <div className={skillstyle.skill}>
            <div className={skillstyle.skillicon}>
            <DevIcon icon="ruby" style={devIconStyle} />
            </ div>
            <div className={skillstyle.textcontent}>
              <div className={skillstyle.title}>
                <p>Ruby on Rails</p>
              </div>
                <div className={skillstyle.rate}>
                  <p>★★★★☆</p>
              </div>
              <div className={skillstyle.disc}>
                ＊参考＊<br></br>
                Progate Ruby on Rails<br></br>
                Railsチュートリアル 第6版
              </div>
            </div>
          </div>

          <div className={skillstyle.skill}>
            <div className={skillstyle.skillicon}>
            <DevIcon icon="react" style={devIconStyle} />
            </ div>
            <div className={skillstyle.textcontent}>
              <div className={skillstyle.title}>
                <p>React</p>
              </div>
                <div className={skillstyle.rate}>
                  <p>★★☆☆☆</p>
              </div>
              <div className={skillstyle.disc}>
                ＊参考＊<br></br>
                Progate React
              </div>
            </div>
          </div>

          <div className={skillstyle.skill}>
            <div className={skillstyle.skillicon}>
            <DevIcon icon="git" style={devIconStyle} />
            </ div>
            <div className={skillstyle.textcontent}>
              <div className={skillstyle.title}>
                <p>Git</p>
              </div>
                <div className={skillstyle.rate}>
                  <p>★★★☆☆</p>
              </div>
              <div className={skillstyle.disc}>
                ＊参考＊<br></br>
                Progate Git
              </div>
            </div>
          </div>

        </ div>
      </div>
    </div >
  )
}