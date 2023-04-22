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
  }, [page, filterParam])

  const fetchArticles = async () => {
    var urlArticles = filterParam !== "all" ? `${ARTICLES_URL}&q=${filterParam}&page=${page}` : `${ARTICLES_URL}&q=bitcoin&page=${page}`
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
    let filterPass = true
    if (value.length === 4) {
      setTime(`${value}-01-01`)
    } else if (value.length === 7) {
      setTime(`${value}-01`)
    } else if (value.length === 10) {
      setTime(`${value}`)
    }
    state.filteredResults = state.results.filter(item => {
    const date = new Date(item.publishedAt)
    filterPass = filterPass && (new Date(time).getTime() == date.getTime())
    return filterPass
  })
}
  console.log((new Date(time)))
  console.log(state.filteredResults)

  const handleFilterParam = (value) => {
    setFilterParam(value)
  }

  return {state, loading, error, page, pageRight, pageLeft, timeFilter, time, handleFilterParam, filterParam}
}