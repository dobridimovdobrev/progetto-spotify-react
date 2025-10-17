import { useSelector, useDispatch } from "react-redux";
import { togglePlayPause } from "../redux/reducer/playerReducer";
import { Row, Col, ProgressBar, Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaRegPauseCircle } from "react-icons/fa";

const Player = (props) => {
  const { currentSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(100);

  
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Errore durante la riproduzione:", error);
          dispatch(togglePlayPause());
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong, dispatch]);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handlePlayPause = () => {
    dispatch(togglePlayPause());
  };

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1 mt-4">
    
      {currentSong && (
        <audio
          ref={audioRef}
          src={currentSong.preview}
          onEnded={() => dispatch(togglePlayPause())}
        />
      )}
      
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <Row className="h-100 align-items-center">
            {/* Info canzone corrente */}
            {currentSong && (
              <Col xs={12} md={3} className="d-flex align-items-center">
                <img 
                  src={currentSong.album.cover_small} 
                  alt={currentSong.title}
                  className="me-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <div>
                  <h6 className="mb-0 text-truncate">{currentSong.title}</h6>
                  <small className="text-muted">{currentSong.artist.name}</small>
                </div>
              </Col>
            )}
            
            {/* Controlli player */}
            <Col xs={12} md={currentSong ? 6 : 9} className="text-center mx-auto">
              <div className="playerControls">
                <div className="d-flex justify-content-center">
                  <a href="#" className="mx-2">
                    <img src={props.shuffleButton} alt="shuffle" />
                  </a>
                  <a href="#" className="mx-2">
                    <img src={props.prevButton} alt="prev" />
                  </a>
                  <a href="#" onClick={handlePlayPause} className="mx-2 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                    {isPlaying ? (
                      <FaRegPauseCircle size={30} color="#999999" />
                    ) : (
                      <FaPlay size={24} color="#999999" />
                    )}
                  </a>
                  <a href="#" className="mx-2">
                    <img src={props.nextButton} alt="next" />
                  </a>
                  <a href="#" className="mx-2">
                    <img src={props.repeatButton} alt="repeat" />
                  </a>
                </div>
                <div className="mt-3">
                  <ProgressBar now={0} style={{ height: "5px" }} />
                </div>
              </div>
            </Col>
            
            {/* Volume */}
            {currentSong && (
              <Col xs={12} md={3} className="d-none d-md-block">
                <div className="volume-controls d-flex justify-content-end align-items-center">
                  <span className="me-2">Volume</span>
                  <Form.Range
                    min={0}
                    max={100}
                    value={volume}
                    onChange={(e) => setVolume(parseInt(e.target.value))}
                    style={{ width: "100px" }}
                  />
                </div>
              </Col>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Player;