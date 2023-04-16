import { useState, useEffect } from "react";

export const useArticlesFetch = () => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  var urlArticles = `https://newsapi.org/v2/everything?q=apple&pageSize=10&page=${page}&apiKey=5b2a127c4bf1411c8a3de122fd6c7fde`

  useEffect(() => {
    getArticles()
  }, [page])

  const fetchArticles = async () => {
    const res = await fetch(urlArticles)
    const data = await res.json()
    return data
  }

  const getArticles = async () => {
    try {
      setError(false)
      setLoading(true)
      const articlesFromServer = await fetchArticles()
      setState({
        results: articlesFromServer.articles,
        totalPage: articlesFromServer.totalPage
      })
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }
  
  const pageRight = () => {
    setPage((prev) => prev + 1)
  } 

  const pageLeft = () => {
    setPage((prev) => prev - 1)
  }
  
  return {state, loading, error, page, pageRight, pageLeft}
}