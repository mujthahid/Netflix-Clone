import React, { useState, useEffect,useRef } from 'react'
import { imageUrl } from '../../Constants/Constants'
import { API_KEY } from '../../Constants/Constants'
import axios from '../../axios'
import './RowPost.css'
import { FaGreaterThan } from "react-icons/fa";
import Popup from '../Popup/Popup'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import Loader from '../Loader/Loader'


function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [movieVideoId, setMovieVideoId] = useState('')
  const [showPopup, setShowPopup] = useState(false)
const [videoPlayer,setVideoPlayer] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
 const [loading,setLoading] = useState(true)

  useEffect(() => {
    axios.get(props.URL + `&page=${pageNumber}`).then((response) => {
      setMovies([...movies,...response.data.results])
      setLoading(false);
    }).catch((err) => {
      // alert('Network Error')
    })
     // eslint-disable-next-line
  }, [pageNumber])

  

  const scrollToEnd = () => {
    setPageNumber(pageNumber + 1)
  }

  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listInnerRef.current;
      if (scrollLeft + clientWidth === scrollWidth) {
        scrollToEnd()
      }
    }
  };

  



  const handleMovie = async(id, category) => {
   await axios.get(`/${category}/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setVideoPlayer(true)
        setMovieVideoId(response.data.results[Math.floor(Math.random() * response.data.results.length)]) 
        document.querySelector('body').style.overflow = 'hidden'
      } else {
        console.log('Array is empty');
      }
    })
  }

  function displayPopup() {
    setShowPopup(true)
   document.querySelector('body').style.overflow = 'hidden'
  }

  return !loading === true ? (
   <div className='row'>
     
      <div className='titleHead'>
        <h2>{props.title}</h2>
        <div className='explore'>
        <h5 onClick={displayPopup} className='exploreAll'>Explore All</h5>
        <span onClick={displayPopup} className='exploreArrow'><FaGreaterThan/></span>
        </div>
       
      </div>
      {showPopup && < Popup  
      setShowPopup={setShowPopup}
        title={props.title}
        URL={props.URL} />}

      <div  className="posters"
       onScroll={onScroll}
       ref={listInnerRef}>

      {movies.map((obj,index) =>
          <div key={index} >
            <img onClick={() => handleMovie(obj.id, obj.title ? 'movie' : 'tv')} className={props.isSmall ? 'smallPoster' : 'poster'}
             src={`${imageUrl + obj.poster_path}`} alt="poster" />
             
          </div>)}
        

      </div>

     

       { movieVideoId && videoPlayer && <VideoPlayer movieVideoId = {movieVideoId}
        setVideoPlayer = {setVideoPlayer}/>}
    </div>
  ):<Loader/>
}

export default RowPost