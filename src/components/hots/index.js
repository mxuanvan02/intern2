import React from 'react'
import Fire from '../../images/fire.png'

const Hots = ({ hots }) => {
  return (
    <div className="hot-news">
      <div className="hot-news-label"><img src={Fire} alt="fire" className="hot-news-icon" />SỰ KIỆN NÓNG</div>
      <div className="hot-news-list flex-container flex-row">
        {hots.map((hot, i) => (
          <div className="news-item flex-container" key={i}>
            <img src={hot.urlToImage} alt={hot.title} className="news-img" />
            <a className="news-title" href={hot.url}>{hot.title}</a>
            <p className="news-author">{hot.source.name}</p>
            <time className="news-date" dateTime={hots.publishedAt}>{hots.publishedAt}</time>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hots