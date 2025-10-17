import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import SongsCard from "./SongsCard";

const SearchResults = () => {
  const { searchResults, searchQuery, loading, error } = useSelector(
    (state) => state.search
  );

  if (!searchQuery) return null;

  return (
    <div className="search-results mb-4 mt-4">
      <h2>{searchQuery}</h2>
      
      {loading ? (
        <div className="text-center my-4">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Caricamento...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          Si è verificato un errore durante la ricerca: {error}
        </div>
      ) : searchResults.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Nessun risultato trovato per "{searchQuery}"
        </div>
      ) : (
        <>
          <p className="text-muted mb-3">Mostrando {Math.min(searchResults.length, 20)} risultati di {searchResults.length} totali</p>
          <Row xs={1} sm={2} md={3} lg={4} className="gy-3">
            {searchResults.slice(0, 20).map((song) => (
              <Col key={song.id}>
                <SongsCard song={song} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default SearchResults;
