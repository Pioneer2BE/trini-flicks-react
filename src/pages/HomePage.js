import React, {useEffect, useState} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MediaShelf from '../components/MediaShelf';


const HomePage = () => {


    const img1 = require(`../assets/img/batman_superman.jpg`).default
    const img2 = require(`../assets/img/squid_game_red.jpg`).default

    const [featuredMovies, setFeaturedMovies] = useState([])

    //const [featuredTvShows, setFeaturedTvShows] = useState([])

    useEffect(()=>{

   
        fetch("http://localhost:5000/movies?ft=true")
        .then(res=>res.json())
        .then(data=>{

          setFeaturedMovies(data.data)
  
        })
  
    },[])


    return (
        <>
            <Navbar />

            <Splide>
                <SplideSlide>
                    <img src={img1} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img2} alt="Image 2" />
                </SplideSlide>
            </Splide>

            <h1>Featured Movies</h1>
            <hr />
            <MediaShelf medias = {featuredMovies}/>
            <h1>Featured TV Shows</h1>
            <hr />
            <MediaShelf />
            <Footer />
        </>
    )
}

export default HomePage
