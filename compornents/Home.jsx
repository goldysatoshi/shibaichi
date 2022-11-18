import React from 'react'
import { Link } from 'react-router-dom';
import { NewsData } from './NewsData';
import { WorkDate } from './WorkDate';

const Home = () => {
  return (
    <>
    <div className='home'>
    <div className='mv'></div>
      <div className="contents">
        <div className="news">
          <h2>新着情報</h2>
          <div className="news-list">
            <ul>
              {NewsData.map((value, key) => {
                return(
            <li className="news-list-item" key={key}>
                <Link path={'/#/'}>
                  <div className="news-list-date">
                    <time>{value.deta}</time>
                  </div>
                  <p>{value.news}</p>
                </Link>
              </li>
                )
              })}
            </ul>
          </div>

        </div>

      <div className="work">
        <h2 className='workAbout'>事業内容</h2>
        <div className="work-list">
        {WorkDate.map((value ,key) => {
          return (
            <div className="work-list-item" key={key}>
          <Link path={'/#/'}>
          <img src={value.photo} alt={value.workname} />
          <p>{value.workname}</p>
          </Link>
        </div>
          )
        })}
        </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default Home;