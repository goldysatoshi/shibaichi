import React from 'react'
import { RecruitmentData } from './RecruitmentData';
import { Link } from 'react-router-dom';


const Recruitment = () => {
  return (
    <div className='recruitment'>
      <div className="mv">
      <div className="overlay"></div>
        <h2>採用情報</h2>
      </div>

      <div className="contents">
        <div className="subject">
          <h2>人事部からのメッセージ</h2>
          <p>これまで「未来に誇れる確かな品質」の社訓のもと徹底した品質を提供してきました。<br />
          <br />
              当社では、専攻分野・国籍・性別・障がいの有無等に関わらず、多様な人材が各々の力を発揮して働いており、<br />
              一人一人の高い意識が未来の品質に繋がっております。<br />
              <br />
              一緒に未来を創っていきましょう。<br />
          </p>
        </div>
        <div className="recruitmentInf">
        {RecruitmentData.map((value, key)=> {
          return(

            <Link path="">
              <div className="recruitmentlist" key={key}>
              <div className="listImage">
              <img src={value.img} alt={value.recruitname} />
              </div>
              <h3>{value.recruitname}</h3>
              <p>{value.recruitabout}</p>
              </div>
            </Link>

          )
        })}

        </div>
      </div>
    </div>
  )
}

export default Recruitment;