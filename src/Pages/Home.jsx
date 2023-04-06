import React from 'react'
import Main from '../Layout/Main'
import Row from '../Layout/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='NETFLIX ORGINAL' fetchURL={requests.requestNetflixOriginal} />
        <Row rowID='2' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowID='3' title='UpComing' fetchURL={requests.requestUpcoming} />
        <Row rowID='4' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='5' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='6' title='Action' fetchURL={requests.requestAction} />
        <Row rowID='7' title='Animation' fetchURL={requests.requestAnimation} />
        <Row rowID='8' title='Comedy' fetchURL={requests.requestComedy} />
        <Row rowID='9' title='Crime' fetchURL={requests.requestCrime} />
        <Row rowID='10' title='Documentry' fetchURL={requests.requestDocumentry} />
        <Row rowID='11' title='Thriller' fetchURL={requests.requestThriller} />
        <Row rowID='12' title='Mystery' fetchURL={requests.requestMystery} />
    </>
  )
}

export default Home