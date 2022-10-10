import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import axios from '../../axios'
import './Banner.css'
import VideoPlayer from '../VideoPlayer/VideoPlayer'



function Banner() {
const [movie, setMovie] = useState()
const [videoPlayer,setVideoPlayer] = useState(false)
const [movieVideoId, setMovieVideoId] = useState('')

useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
    
   })
},[])

const bannerMovie= async(id,type)=>{
   await axios.get(`/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
        if (response.data.results.length !== 0) {
          setVideoPlayer(true)
          setMovieVideoId(response.data.results[Math.floor(Math.random() * response.data.results.length)])
          document.querySelector('body').style.overflow = 'hidden'
        } else {
          console.log('Array is empty');
        }
      })
  }

    return (<div className='wholeBanner'>
    
      {movieVideoId && videoPlayer && <VideoPlayer movieVideoId={movieVideoId} setVideoPlayer={setVideoPlayer}/>}
        <div style={{backgroundImage:`URL(${movie ? imageUrl+movie.backdrop_path : ""})` }}
         className='banner'>
             
            <div className="content">
           
                <h1 className="title">{movie ? movie.title || movie.name : ""} </h1>
                <div className="banner_buttons">
                    <button onClick={()=>bannerMovie(movie.id,movie.media_type)} className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade-bottom"></div>
          </div>
        </div>
    )
}

export default Banner