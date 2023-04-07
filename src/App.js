import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Articles from './components/articles';

function App() {
  const [articles, setArticles] = useState([])
  var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=5b2a127c4bf1411c8a3de122fd6c7fde"
  useEffect(() => {
    const getArticles = async () => {
      const articlesFromServer = await fetchArticles()
      setArticles(articlesFromServer.articles)
    }
    getArticles()
  }, []);
  const fetchArticles = async () => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }
  console.log(articles)
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Articles articles={articles}/>} />
      </Routes>
    </Router>
  );
}

export default App;
