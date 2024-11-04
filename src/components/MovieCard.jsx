import { useNavigate  } from 'react-router-dom';
import React from 'react';
import "./movie.scss";
import { AiFillStar } from "react-icons/ai"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import FetchMovie, { movies } from "./FetchMovie";
// import Genre from '../Genre/Genre';

export const imageUrl = `https://media.themoviedb.org/t/p/w500`;


const MovieCard = (props) => {
    const navigate = useNavigate();

    const movieToDetail = () => {
        navigate('/movie/{props.title}', {
        state : props,
        });
    };


    return (
        <movie-card-container>
        <div className="movie-card-container" onClick={movieToDetail}>
            <div hoverable style={{ width: 300, height:250}}>
                <div className='movie-image' style={{ width: 300, height:200}}>
                    <img
                        alt={props.title}
                        src={imageUrl + props.backdrop_path}
                        style={{width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                </div>
                
                <div className='movie-title' style={{fontSize:'24px'}}>
                    {props.title}
                </div>
                <div className='movie-info' style={{fontSize:'12px'}}>
                    <AiFillStar />
                    {props.vote_average}<br />
                    개봉일: {props.release_date}<br />
                    연령제한 : {props.adult?('18세 이상'):('18세 이하')}<br />
                    {/* {props.genre_ids}{props.poster_path}{props.overview}{props.runtime} */}
                </div>
            </div>
        </div>
        </movie-card-container>
    );
}
export default MovieCard;
