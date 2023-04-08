import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';


function App() {
  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState([])
  const [hots, setHots] = useState([])
  var urlHots = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${page}&apiKey=5b2a127c4bf1411c8a3de122fd6c7fde`
  var urlArticles = `https://newsapi.org/v2/everything?q=apple&pageSize=10&apiKey=5b2a127c4bf1411c8a3de122fd6c7fde`

  useEffect(() => {
    getArticles()
    getHots()
  }, [page])

  const fetchArticles = async () => {
    const res = await fetch(urlArticles)
    const data = await res.json()
    return data
  }

  const getArticles = async () => {
    const articlesFromServer = await fetchArticles()
    setArticles(articlesFromServer.articles)
  }

  const fetchHots = async () => {
    const res = await fetch(urlHots)
    const data = await res.json()
    return data
  }

  const getHots = async () => {
    const hotsFromServer = await fetchHots()
    setHots(hotsFromServer.articles)
  }

  const loadMore = () => {
    setPage((prev) => prev + 1)
  }

  console.log(articles)
  console.log(hots)
  console.log(page)
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home articles={articles} hots={hots} loadMore={loadMore} />} />
      </Routes>
    </Router>
  );
}

export default App;
