import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {FaChevronLeft , FaChevronRight} from 'react-icons/fa'

const Row = ({title,fetchURL,rowId}) => {
 
 const [movies,setMovies] = useState([])

  
 useEffect(()=>{
    axios.get(fetchURL).then((response)=>{
        setMovies(response.data.results)
    })
 },[fetchURL])

 const SlideLeft=()=>{
    let slider=document.getElementById('slider'+rowId)
    slider.scrollLeft=slider.scrollLeft-500

 }

 
 const SlideRight=()=>{
  let slider=document.getElementById('slider'+rowId)
  slider.scrollLeft=slider.scrollLeft+500

}

  return (
    <> 
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
      <FaChevronLeft onClick={SlideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item,id)=>(
                <Movie item={item}/>
            ))}
        </div>
        <FaChevronRight onClick={SlideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
    </div>                  
    </>
  )
}

export default Row

// {movies.map((item,id)=>{
//    
// })}