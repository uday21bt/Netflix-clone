import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Requests from '../Request'


const Home = () => {
  return (
    <>
    <Main/>
    <Row title='Popular' fetchURL={Requests.requestPopular}/>
    <Row title='TopRated' fetchURL={Requests.requestTopRated}/>
    <Row title='Trending' fetchURL={Requests.requestTrending}/>
    <Row title='Horror' fetchURL={Requests.requestHorror}/>
    <Row title='Upcoming' fetchURL={Requests.requestUpcoming}/>

    </>
  )
}

export default Home