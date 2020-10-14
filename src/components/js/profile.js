import React from "react"
import profileStyles from '../css/profile.module.css'
import Face from "../../images/in208213147509118215334.png"

export default function Profile() {
  return (
    <div className={profileStyles.profile} id="profile">
      <div className={profileStyles.container}>
        <h1>PROFILE</h1>
        <h4>自己紹介</h4>
        <div className={profileStyles.disc}>
          <img src={Face} alt="face" />
          <p>
            はじめまして！<br></br>
          おおつかりゅうたろう（@tsuka_ryu）と申します。<br></br>
          1994年生まれ、現在26歳です。
          新卒で大手Slerに入社し、2年ほど基幹系システムの開発〜保守運用をやっていました。<br></br>
          炎上プロジェクトで摩耗する日々の中で、自分で開発できるようになりたいと思い、退社。<br></br>
          未経験でスキル不足のため、転職に向けて勉強中です。
         </p>
        </div>
      </ div>
    </div>
  )
}