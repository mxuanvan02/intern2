import React from 'react'
import Articles from './articles';
import Hots from './hots';

const Home = ({ articles, hots }) => {
  return (
    <div className="body-contents">
      <Hots hots={hots} />
      <Articles articles={articles} />
    </div>

  )
}

export default Home;