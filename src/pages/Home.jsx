import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Requests from '../Request'


const Home = () => {
  return (
    <>
    <Main/>
    <Row rowId='1' title='Popular' fetchURL={Requests.requestPopular}/>
    <Row rowId='2' title='TopRated' fetchURL={Requests.requestTopRated}/>
    <Row rowId='3' title='Trending' fetchURL={Requests.requestTrending}/>
    <Row rowId='4' title='Horror' fetchURL={Requests.requestHorror}/>
    <Row rowId='5' title='Upcoming' fetchURL={Requests.requestUpcoming}/>

    </>
  )
}

export default Home