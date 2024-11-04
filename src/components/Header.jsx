import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

export default function Header() {

    return (
        <div className='header-container'>
            <div className='header-wrap'>
                <Link to='/'>
                  <div className='home' style={{display:'flex'}}>
                    <img
                        style={{width:"40px", height:"50px"}}
                        src={logo}
                        alt="영화 검색 사이트"/>
                    <h3>영화검색사이트</h3>
                  </div>
                </Link>
                <ul>
                    <li>
                        <Link className='header-nav-item' to="/about">about</Link>
                    </li>
                </ul>
            </div>
        </div>
    );

}
