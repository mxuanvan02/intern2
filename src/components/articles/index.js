import React from 'react'

// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 30;
const year = day * 365;

const Articles = ({ articles }) => {
  const realTime = Date.now()
  return (
      <div className="group-news-other">
        <ul className="other-news" id="list-latest-news">
          {articles.map((article, i) => {
            var articleTime = new Date(`${article.publishedAt}`)
            var time = realTime - articleTime.getTime();
            var str = ""
            if (time > year) {time = time / year; str = "years"}
            else if (time > month) {time = time / month; str = "months"}
            else if (time > day) {time = time / day; str = "days"}
            else if (time > hour) {time = time / hour; str = "hours"}
            else {time = time / minute; str = "minutes"}
            time = Math.round(time)
            return (
            <li key={i}>
              <div className="other-news-item">
                <img src={article.urlToImage} alt={article.title} className="news-img" />
                <div className="other-news-contents">
                  <a className="news-title" href={article.url}><b>{article.title}</b></a>
                  <p className="news-author">{article.source.name}</p>
                  <time className="news-date">{time} {str} ago.</time>
                  <p className="short-contents-other">{article.description}</p>
                </div>
              </div>
            </li>
          )})}
        </ul>
        <div className="news-bar">
        <h2 className="title-news-bar">Du lịch</h2>
        <div className="news-item flex-container">
          <img src="images/nuocngoaixintien.png" alt="người nước ngoài xin tiền để đi du lịch" className="news-img" />
            <a className="news-title" href="details-page.html">Hai người nước ngoài đứng trên đường phố Đà Nẵng xin 'cứu giúp'</a>
            <p className="news-author">Vienamnet</p>
            <time className="news-date" datetime="2023-02-23T14:00:00.000Z">2023-02-23T14:00:00.000Z</time>
        </div>
        <div className="crossbar"></div>
        <h2 className="title-news-bar">Giải trí</h2>
        <div className="news-item flex-container">
          <img src="images/bangkieu.png" alt="ca sĩ Bằng Kiều" className="news-img" />
            <a className="news-title" href="details-page.html">Bằng Kiều: 'Khán giả của tôi đều là người giàu'</a>
            <p className="news-author">vnexpress</p>
            <time className="news-date" datetime="2023-02-22T14:00:00.000Z">2023-02-22T14:00:00.000Z</time>
        </div>
      </div>
      </div>
  )
}

export default Articles;