import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { imageUrl } from "../components/MovieCard";
import { AiFillStar } from "react-icons/ai";

export default function MovieDetail() {
    const { title } = useParams();
    const { state } = useLocation();
    // const posterPath = movie?.poster_path;
    console.log(state)
    console.log(title)
    

    return (
        <detail-container>
        <div className="detail-page">
            <div style={{display:'flex'}}>
                <img
                    style={{width: '400px'}}
                    src={imageUrl + state.poster_path}
                    alt="영화 포스터 이미지"
                    />  
                <div className="information-container"> 
                    <div style={{fontSize:'32px'}}>{state.title}</div>
                    <div className="detail-information">
                        <p> 연령제한 : {state.adult ? '18세 이상' : '18세 이하'}</p>
                        <p> 장르 : {state.genre_ids}</p>
                        <p> 개봉일자 : {state.release_date}</p>
                        <p> 관개수 : {state.popularity}0명</p>
                        <p> <AiFillStar /> {state.vote_average} ({state.vote_count})</p>
                        <p>{state.overview}</p>
                    </div>
                </div>
            </div>
        </div>
        </detail-container>
    )
}
// const api = apiKEY;
// export const useMovieDetails = ({id}) =>{
//     return useQuery({
//         queryKey:['movie-details',{id}],
//         queryFn:()=>{
//             return api.get(`/movie/${id}`)
//         },
//         select:(result) => result.data,});
//         <div className='MovieInfoContainer'>
//             <h1>{data?.title}</h1>
//             <p>{data?.overview}</p>
//             <p className='OverviewContainer'></p>
//             <p> 연령제한 : {data?.adult ? 'over 18' : 'under 18'}</p>
//             <p> 개봉일자 : {data?.release_date}</p>
//             <p> 상영시간 : {data?.runtime}분</p>
//             <p> 평점 : {data?.vote_average} 점</p>
//        </div>
// }

// import React from 'react';
// // import './Detail.css';

// class Detail extends React.Component {
//     componentDidMount() {
//         const { location, history } = this.props;
//         if (location.state === undefined) {
//             history.push('/');
//         }
//     }

//     render() {
//         const { location} = this.props;
//         if (location.state) {
//         return (
//         <div className="movie__detail">
//                 <img src={location.state.poster}/><br></br>
//             <div className="movie__data">
//                 <h3>{location.state.title}</h3>
//                 <h5 className="movie__year">{location.state.year}</h5> 
//                 <ul className="movie__genres">
//                 {location.state.genres.map((genre, index) => {
//                     return <li key={index} className="movie__genre">{genre}</li>
//                 })}
//                 </ul>    
//                 <p class="movie__summary">{location.state.summary}</p>
//         </div>
//         </div>);
        
        
//         } else {
//             return null;
//         }
//     }
// }

// export default Detail;