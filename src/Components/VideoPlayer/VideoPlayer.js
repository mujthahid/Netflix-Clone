import React,{useState,useEffect} from 'react'
import Youtube from 'react-youtube'
import { AiFillCloseCircle } from "react-icons/ai";
import './VideoPlayer.css'



function VideoPlayer(props) {
    const [VideoId, setVideoId] = useState('')

useEffect(()=>{
  setVideoId(props.movieVideoId)
},[props.movieVideoId])




    const opts = {
        height: '600',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };   

  
const closeVideo = ()=> 
{props.setVideoPlayer(false)
 if(!props.popupIsOn) {
   document.querySelector('body').style.overflow = 'auto'}
}

return (
    <div className='VideoPlayer'>
        <span onClick={closeVideo} className='exitVideo'><AiFillCloseCircle/></span>
        <div className='videoPlayerLoc'>
{VideoId && < Youtube opts={opts} videoId={VideoId.key} />}
        </div>
    </div>
  )
}

export default VideoPlayer