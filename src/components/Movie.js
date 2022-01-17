import PropTypes from "prop-types";
import { Link } from "react-router-dom"

function Movie({id, title, rating, summary, genres = [], medium_cover_image}) {
  return (
  <div>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <img src={medium_cover_image} alt={title} />
    <p>{rating}</p>
    {genres.map((g, i) => <span key={i}>{g} </span>)}
    <p>{summary}</p>
    <hr/>
  </div>);
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;