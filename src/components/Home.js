import React from 'react'
import Articles from './Articles';
import Hots from './Hots';

const Home = () => {
  return (
    <div className="body-contents">
        <Hots />
        <Articles />
    </div>

  )
}

export default Home;