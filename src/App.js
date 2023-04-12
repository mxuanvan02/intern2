import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';


function App() {
  // Fetch API
  const [loadingHots, setLoadingHots] = useState(false)
  const [errorHots, setErrorHots] = useState(false)
  const [articles, setArticles] = useState([])
  const [hots, setHots] = useState([])
  const [loadingArticles, setLoadingArticles] = useState(false)
  const [errorArticles, setErrorArticles] = useState(false)
  // Limit data display
  const [pageArticles, setPageArticles] = useState(1)
  const [pageHots, setPageHots] = useState(1)
  const [totalPageHots, setTotalPageHots] = useState(0)
  const [totalPageArticles, setTotalPageArticles] = useState(0)
  // Filter
  // const [from, setFrom] = useState("")
  // const [to, setTo] = useState("")
  var urlHots = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageHots}&apiKey=5b2a127c4bf1411c8a3de122fd6c7fde`
  var urlArticles = `https://newsapi.org/v2/everything?q=apple&pageSize=10&page=${pageArticles}&apiKey=5b2a127c4bf1411c8a3de122fd6c7fde`
  
  // Fetch API
  useEffect(() => {
    getHots()
  }, [pageHots])

  useEffect(() => {
    getArticles()
  }, [pageArticles])

  const fetchArticles = async () => {
    const res = await fetch(urlArticles)
    const data = await res.json()
    return data
  }

  const getArticles = async () => {
    try {
      setErrorArticles(false)
      setLoadingArticles(true)
      const articlesFromServer = await fetchArticles()
      setArticles(articlesFromServer.articles)
      setTotalPageArticles(articlesFromServer.totalResults)
    } catch (error) {
      setErrorArticles(true)
    }
    setLoadingArticles(false)
  }

  const fetchHots = async () => {
    const res = await fetch(urlHots)
    const data = await res.json()
    return data
  }

  const getHots = async () => {
    try {
      setErrorHots(false)
      setLoadingHots(true)
      const hotsFromServer = await fetchHots()
      setHots(hotsFromServer.articles)
      setTotalPageHots(hotsFromServer.totalResults)
    } catch (error) {
      setErrorHots(true)
    }
    setLoadingHots(false)
  }

  // Page
  const pageRightHots = () => {
    setPageHots((prev) => prev + 1)
  }

  const pageLeftHots = () => {
    setPageHots((prev) => prev - 1)
  }

  const pageRightArticles = () => {
    setPageArticles((prev) => prev + 1)
  }

  const pageLeftArticles = () => {
    setPageArticles((prev) => prev - 1)
  }
  console.log(articles)
  console.log(hots)
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home articles={articles} hots={hots}
                                      loadingHots={loadingHots} errorHots={errorHots}
                                      loadingArticles={loadingArticles} errorArticles={errorArticles}
                                      pageRightHots={pageHots * 5 > totalPageHots ? "more" : pageRightHots} pageLeftHots={pageHots * 5 < 1 ? "less" : pageLeftHots}
                                      pageRightArticles={pageArticles * 10 > totalPageArticles ? "more" : pageRightArticles} pageLeftArticles={pageArticles * 10 < 1 ? "less" : pageLeftArticles} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
