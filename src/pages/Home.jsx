import React, { Component } from 'react';
import { apiKEY } from "../apiKEY";
import FetchMovie from "../components/FetchMovie";
import SearchBar from '../components/SearchMovie';

const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKEY}&language=ko&page=1`;
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKEY}&language=ko&page=1`;
const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKEY}&language=ko&page=1`;
const upComingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKEY}&language=ko&page=1`;

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <SearchBar/>
                </div>
                <div className='page-container' style={{fontSize: '32px'}}>
                   상영중인영화
                    {/* <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide> */}
                    <FetchMovie url={nowPlayingUrl} />
                    {/* </SwiperSlide>
                    </Swiper> */}
                </div>
                <div className='page-container' style={{fontSize: '32px'}}>인기영화
                    <FetchMovie url={popularUrl} />
                </div>
                <div className='page-container' style={{fontSize: '32px'}}>평점높은영화
                    <FetchMovie url={topRatedUrl} />
                </div>
                <div className='page-container' style={{fontSize: '32px'}}>개봉예정영화
                    <FetchMovie url={upComingUrl} />
                </div>
            </div>
        );
    }
}

export default Home;