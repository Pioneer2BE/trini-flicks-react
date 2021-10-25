import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AddMedia from '../components/AddMedia'

const AddMoviePage = () => {
    return (
        <>
            <Navbar />
                <div className="container">
                    <h1 className="title is-spaced">Add Movie</h1>
                    <AddMedia type='movie'/>
                </div>
            <Footer />
        </>
    )
}

export default AddMoviePage
