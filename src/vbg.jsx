import React, { useRef, useEffect, useState } from "react";
import Styles from "./Vbg.module.css";
import "./style.css"

/* Endereços dos Vídeos */
const videos = [
  "./public/video1.mp4", 
  "./public/video2.mp4",
];

const Vbg = () => {
const [videoIndex, setVideoIndex] = useState(0);
const [isPlaying, setIsPlaying] = useState(true);
const [isAboutDisabled, setIsAboutDisabled] = useState(true); 
const [isBrandingDisabled, setIsBrandingDisabled] = useState(false); 
const [isHidded, setIsHidded] = useState(false);
const videoRef = useRef(null);
const [volume, setVolume] = useState(0.0);
const [position, setPosition] = useState(0.01);

const Hide = () => {
  if (videoRef.current.hidden === true) {
    setIsHidded(true);
  } else {
    setIsHidded(false);
  }
};
  
  // Função para alternar entre play e pause
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Função para alternar index do vídeo
  const V1 = () => {
    setVideoIndex(0); // 
    setIsAboutDisabled(true); 
    setIsBrandingDisabled(false);
 ;
  };

  // Função para alternar index do vídeo
  const V2 = () => {
    setVideoIndex(1);  
    setIsBrandingDisabled(true); 
    setIsAboutDisabled(false);
    };
 
  
  // Efeito para sincronizar o estado do vídeo com o ícone

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play(); 
        videoRef.current.hidden = false;
        Hide();
      } else {
        videoRef.current.pause();
        Hide();
      }
    }
  }, [isPlaying]);

  // Efeito PLAY / SHOW
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); 
      setIsPlaying(true);
      videoRef.current.hidden = false; 
 
    }
  }, [videoIndex]);

  // Efeito para lidar com o fim do vídeo
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", () => {
        setIsPlaying(false); 
        videoRef.current.hidden = true; 
       
      });
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const handleTimeUpdate = () => {
        if (videoRef.current && videoRef.current.duration) {
          setPosition(videoRef.current.currentTime / videoRef.current.duration);
        }
      };
  
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
  
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        }
      };
    }
  }, [videoIndex]);
  
  return (
    
    <div className={Styles.backGround}>

      <div className={Styles.navegador}>

        {/* NAVEGADOR */}
        
        {/* Botão ABOUT */}
        <div className={Styles.buttonContainer}>
        <button
          className={Styles.button}
          onClick={V1}
          disabled={isAboutDisabled} 
        >
          ABOUT
        </button>

        {/* Botão BRANDING */}
        <button
          className={Styles.button}
          onClick={V2}
          disabled={isBrandingDisabled}
        >
          BRANDING
        </button>
        </div>
      </div>

      {/* VIDEO BACKGROUND */}
      <div className={Styles.videoDisplay}>
        
        <video
          ref={videoRef}
          className={Styles.Video}
          src={videos[videoIndex]}
          autoPlay
          muted
          playsInline
        />
        
        {isHidded && (
        <div className={Styles.logoContainer}>
          <img className={Styles.logo} src="./public/HD-brandandmotion.svg"/>
        </div>
        )};
      </div>


     
     {/* CONTROLES */}

      <div className={Styles.controles}>
        {/* Botão Play/Pause */}
        <button className={Styles.playPause} onClick={togglePlayPause}>
        <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
        </button>
      
        <input type="range" min={0} max={1} step={0.1} value={volume} id="volume-slider" 
          onChange={(e) => {
          const newVolume = parseFloat(e.target.value);
          setVolume(newVolume);
          if (videoRef.current) {
          if (newVolume != 0) {
            videoRef.current.muted = false;
            videoRef.current.volume = newVolume;
          } else {
            videoRef.current.muted = true;
          }
        }
      }}>
      </input>

      <i class="fas fa-volume-up speaker-icon" id="volumeIcon"></i>

      <input id="progress-slider" type="range" min={0} max={1} step={0.01} value={position} className="progress"
      onChange={(e) => {
        const newPosition = parseFloat(e.target.value);
      setPosition(newPosition);
    if (videoRef.current) {
      videoRef.current.currentTime = newPosition * videoRef.current.duration;
    }     }

      }>

      </input>

      </div>
      
       
    </div>
  );
};

export default Vbg;