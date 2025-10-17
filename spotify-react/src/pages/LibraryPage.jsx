import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import SongsCard from "../components/SongsCard";

const LibraryPage = () => {
  const likedSongs = useSelector((state) => state.favorites.likedSongs);

  return (
    <>
      <div className="row mb-4 mt-4">
        <div className="col-12">
          <h1>La tua libreria</h1>
        </div>
      </div>

      {likedSongs.length === 0 ? (
        <div className="row">
          <div className="col-12">
            <div className="alert alert-info" role="alert">
              Non hai ancora aggiunto brani ai preferiti. Clicca sull'icona del cuore su una canzone per aggiungerla qui!
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-12">
            <div id="favorites">
              <h2>I tuoi brani preferiti ({likedSongs.length})</h2>
              <Row xs={1} sm={2} md={3} lg={4} className="gy-3">
                {likedSongs.map((song) => (
                  <Col key={song.id}>
                    <SongsCard song={song} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LibraryPage;
