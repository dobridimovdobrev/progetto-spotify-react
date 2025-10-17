import MusicList from "../components/MusicList";
import SearchResults from "../components/SearchResults";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { searchQuery } = useSelector((state) => state.search);

  return (
    <>
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      
      {/* Risultati della ricerca o sezioni musicali */}
      {searchQuery ? (
        <div className="row">
          <div className="col-12">
            <SearchResults />
          </div>
        </div>
      ) : (
        <>
          {/* Rock Classics */}
          <div className="row">
            <div className="col-12">
              <div id="rock">
                <h2>Rock Classics</h2>
                <div className="row" id="rockSection">
                  <MusicList query={"rock classics"} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Pop Culture */}
          <div className="row">
            <div className="col-12">
              <div id="pop">
                <h2>Pop Culture</h2>
                <div className="row" id="popSection">
                  <MusicList query={"best pop"} />
                </div>
              </div>
            </div>
          </div>
          
          {/* HipHop */}
          <div className="row">
            <div className="col-12">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <div className="row" id="hipHopSection">
                  <MusicList query={"hiphop"} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
