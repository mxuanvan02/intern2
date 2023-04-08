import React from 'react'

const Articles = ({ articles }) => {

  return (
      <div className="group-news-other">
        <ul className="other-news" id="list-latest-news">
          {articles.map((article, i) => (
            <li key={i}>
              <div className="other-news-item">
                <img src={article.urlToImage} alt={article.title} className="news-img" />
                <div className="other-news-contents">
                  <a className="news-title" href={article.url}><b>{article.title}</b></a>
                  <p className="news-author">{article.source.name}</p>
                  <time className="news-date" dateTime={article.publishedAt}>{article.publishedAt}</time>
                  <p className="short-contents-other">{article.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div class="news-bar">
        <h2 class="title-news-bar">Du lịch</h2>
        <div class="news-item flex-container">
          <img src="images/nuocngoaixintien.png" alt="người nước ngoài xin tiền để đi du lịch" class="news-img" />
            <a class="news-title" href="details-page.html">Hai người nước ngoài đứng trên đường phố Đà Nẵng xin 'cứu giúp'</a>
            <p class="news-author">Vienamnet</p>
            <time class="news-date" datetime="2023-02-23T14:00:00.000Z">2023-02-23T14:00:00.000Z</time>
        </div>
        <div class="crossbar"></div>
        <h2 class="title-news-bar">Giải trí</h2>
        <div class="news-item flex-container">
          <img src="images/bangkieu.png" alt="ca sĩ Bằng Kiều" class="news-img" />
            <a class="news-title" href="details-page.html">Bằng Kiều: 'Khán giả của tôi đều là người giàu'</a>
            <p class="news-author">vnexpress</p>
            <time class="news-date" datetime="2023-02-22T14:00:00.000Z">2023-02-22T14:00:00.000Z</time>
        </div>
      </div>
      </div>
  )
}

export default Articles;