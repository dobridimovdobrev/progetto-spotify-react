import logo from "./assets/logo/logo.png"
import {Container,Row} from "react-bootstrap";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import next from "./assets/playerbuttons/next.png";
import play from "./assets/playerbuttons/play.png";
import prev from "./assets/playerbuttons/prev.png";
import repeat from "./assets/playerbuttons/repeat.png";
import shuffle from "./assets/playerbuttons/shuffle.png";
import "./App.css";



function App() {
  return (
    <Container>
      <Row>
        <Sidebar logoImage = {logo}/>
      </Row>
      <Row>
        <Main />
      </Row>
      <Row>
        <Player 
          nextButton={next} 
          playButton={play} 
          prevButton={prev} 
          repeatButton={repeat}
          shuffleButton={shuffle}
        />
      </Row>
    </Container>
  );
}

export default App;
