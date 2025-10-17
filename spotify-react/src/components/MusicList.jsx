import { useState, useEffect } from "react";
import SongsCard from "./SongsCard";
import {Row, Col} from "react-bootstrap";

const MusicList = (props) => {
  const [music, setMusic] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    musicFetch(props.query);
  }, [props.query]);

  async function musicFetch(query) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );

      if (response.ok) {
        const { data } = await response.json();
        setMusic(data);
      } else {
        throw new Error("Music fetch api failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="col-12 text-center">
          <p>Loading...</p>
        </div>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="gy-3">
          {music.slice(0, 4).map((song) => (
            <Col key={song.id}>
              <SongsCard song={song} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default MusicList;