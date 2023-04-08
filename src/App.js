import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';

function App() {
  const [articles, setArticles] = useState([])
  const [hots, setHots] = useState([])
  var urlHots = "https://newsapi.org/v2/top-headlines?country=us&apiKey=5b2a127c4bf1411c8a3de122fd6c7fde"
  var urlArticles = "https://newsapi.org/v2/everything?q=apple&apiKey=5b2a127c4bf1411c8a3de122fd6c7fde"
  useEffect(() => {
    const getArticles = async () => {
      const articlesFromServer = await fetchArticles()
      setArticles(articlesFromServer.articles)
    }
    const getHots = async () => {
      const hotsFromServer = await fetchHots()
      setHots(hotsFromServer.articles)
    }
    getArticles()
    getHots()
  }, []);
  const fetchArticles = async () => {
    const res = await fetch(urlArticles)
    const data = await res.json()
    return data
  }
  const fetchHots = async () => {
    const res = await fetch(urlHots)
    const data = await res.json()
    return data
  }
  console.log(articles)
  console.log(hots)
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home articles={articles} hots={hots} />} />
      </Routes>
    </Router>
  );
}

export default App;
