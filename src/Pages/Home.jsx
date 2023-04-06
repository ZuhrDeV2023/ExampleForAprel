import React from 'react'
import Main from '../Layout/Main'
import Row from '../Layout/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='NETFLIX Orginal' fetchURL={requests.requestNetflixOriginal} />
        <Row rowID='2' title='Upcoming' fetchURL={requests.requestUpcoming} />
        <Row rowID='3' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='4' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='5' title='Action' fetchURL={requests.requestAction} />
    </>
  )
}

export default Home