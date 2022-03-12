import React, { useReducer } from "react";
import MovieCard from "./MovieCard";

const MovieListComponent = (props) => {
  const { Lists, add , remove} = props;
  const ListsCard = [];

  const initialState = {
    title: "",
    description: "",
    posterURL: "",
    rate: 0,
  };
  
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [movie, setMovie] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    add(movie);
    setMovie(initialState);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const val = (e.target.name == 'rate' && e.target.value>3 || e.target.value <0)? 3 :  undefined
    setMovie({
      [e.target.name]: val || e.target.value,
    });
  };
  Lists.map((List, index) => {
    ListsCard.push(
      <MovieCard
        title={List.title}
        description={List.description}
        posterURL={List.posterURL}
        rate={List.rate}
        id={index}
        remove = {remove}
        key={index}
      />
    );
  });

  return (
    <div>
      {ListsCard}

      {/* --------------------------Modal Form------------------------- */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Movie
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id='"title'
                    onChange={handleChange}
                    name="title"
                    value={movie.title}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descrip" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="descrip"
                    onChange={handleChange}
                    name="description"
                    value={movie.description}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="url" className="form-label">
                    PosterURL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    onChange={handleChange}
                    name="posterURL"
                    value={movie.posterURL}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rate" className="form-label">
                    Rate
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="rate"
                    placeholder="Enter a value between 1 to 3"
                    onChange={handleChange}
                    name="rate"
                    value={movie.rate}
                    min={0}
                    max={3}
                  />
                </div>
                <button className="btn btn-danger" onClick={handleSubmit} data-bs-dismiss="modal">
                  Valider
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MovieList = React.memo(MovieListComponent)
export default MovieList;
