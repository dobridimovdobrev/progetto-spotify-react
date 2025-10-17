import Card from "react-bootstrap/Card";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong } from "../redux/reducer/playerReducer";
import { toggleLike } from "../redux/reducer/favoritesReducer";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const SongsCard = ({ song }) => {
  const dispatch = useDispatch();
  
  const likedSongs = useSelector((state) => state.favorites.likedSongs);
  
  const isLiked = likedSongs.some((likedSong) => likedSong.id === song.id);
  
  const handleCardClick = () => {
    dispatch(setCurrentSong(song));
  };
  
  const handleLikeClick = (e) => {
    e.stopPropagation();
    dispatch(toggleLike(song));
  };

  return (
    <Card className="h-100 shadow-sm" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={song.album.cover_medium} 
          className="img-fluid" 
          alt={song.title} 
        />
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id={`tooltip-${song.id}`}>{isLiked ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}</Tooltip>}
        >
          <button 
            className="position-absolute top-0 end-0 btn btn-transparent p-2"
            onClick={handleLikeClick}
            aria-label={isLiked ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
          >
            {isLiked ? (
              <FaHeart className="text-danger" size={24} />
            ) : (
              <FaRegHeart className="text-light" size={24} />
            )}
          </button>
        </OverlayTrigger>
      </div>
      <Card.Body>
        <Card.Title className="text-truncate fs-5">{song.title}</Card.Title>
        <Card.Text className="text-muted">{song.artist.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SongsCard;