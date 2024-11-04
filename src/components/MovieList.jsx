import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = ({ movies }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    backdrop_path={movie.backdrop_path}
                    release_date={movie.release_date}
                />
            ))}
        </div>
    );
}

export default MoviesList;