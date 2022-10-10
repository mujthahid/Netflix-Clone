import React, { useState, useEffect, useRef } from 'react'
import './Popup.css'
import axios from '../../axios'
import { imageUrl } from '../../Constants/Constants'
import { AiFillCloseCircle } from "react-icons/ai";
import { API_KEY } from '../../Constants/Constants'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

function Popup(props) {
  const [movies, setMovies] = useState([])
  const [movieVideoId, setMovieVideoId] = useState('')
  const [videoPlayer,setVideoPlayer] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)

  
useEffect(() => {
    axios.get(props.URL + `&page=${pageNumber}`).then((response) => {
      
   
      setMovies([...movies, ...response.data.results])
    }).catch((err) => {
     console.log(err);
    })
     // eslint-disable-next-line
  }, [pageNumber])


  const scrollToEnd = () => {
    setPageNumber(pageNumber + 1)
  }

  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        scrollToEnd()
      }
    }
  };

  const closeCard = () => {
    props.setShowPopup(false)
    document.querySelector('body').style.overflow = 'auto'
  }

  const handleMovie = async(id, category) => {
    await axios.get(`/${category}/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
         setVideoPlayer(true)
        setMovieVideoId(response.data.results[Math.floor(Math.random() * response.data.results.length)])
      } else {
        console.log('Array is empty');
      }
    })
  }

  return (
    <div className='card' >
    {movieVideoId && videoPlayer && <VideoPlayer movieVideoId={movieVideoId} setVideoPlayer={setVideoPlayer} popupIsOn={true}/>}
      <div className='cardContent'
      onScroll={onScroll}
      ref={listInnerRef}>
        <span onClick={closeCard} className='closeButton'><AiFillCloseCircle/></span>
        <h2 className='cardTitle'>{props.title}</h2>
        <div className='cardContentInner'>
          {movies.map((obj,index) =>
            <div key={index}>
              <img onClick={() => handleMovie(obj.id, obj.title ? 'movie' : 'tv')} src={`${imageUrl + obj.poster_path}`} alt="" />
            </div>
          )}



        </div>
      </div>
    </div>
  )
}

export default Popup