import { useState, useEffect } from "react";
import { ARTICLES_URL } from "../components/config";
import { timeSince } from "../helpers";


export const useArticlesFetch = () => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [time, setTime] = useState(``)
  const [filterParam, setFilterParam] = useState("all")

  useEffect(() => {
    getArticles()
  }, [page, filterParam, time])

  const fetchArticles = async () => {
    var urlArticles = filterParam !== "all" ? `${ARTICLES_URL}&q=${filterParam}&from=${time}&to=${time}&page=${page}`
                                            : `${ARTICLES_URL}&q=all&page=${page}&from=${time}&to=${time}&page=${page}`
    const res = await fetch(urlArticles)
    const data = await res.json()
    return data
  }

  const getArticles = async () => {
    try {
      setError(false)
      setLoading(true)
      const articlesFromServer = await fetchArticles(filterParam)
      setState({
        results: articlesFromServer.articles,
        totalPage: articlesFromServer.totalResults
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

  const timeFilter = (value) => {
    if (value.length === 4) {
      setTime(`${value}-01-01`)
    } else if (value.length === 7) {
      setTime(`${value}-01`)
    } else if (value.length === 10) {
      setTime(`${value}`)
    } else if (value.length === 0) {
      setTime('')
    }
}

  const handleFilterParam = (value) => {
    setFilterParam(value)
  }

  return {state, loading, error, page, pageRight, pageLeft, time, timeFilter, handleFilterParam, filterParam}
}