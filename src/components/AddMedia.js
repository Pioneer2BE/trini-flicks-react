import React, { useState } from 'react'

const AddMedia = () => {

    const mediaForm = {

        title: "",
        synopsis: "",
        releaseDate: "",
        mpa_rating: "",
        genre: [],
        cast: [],
        trailer: "",
        purchase: "",
        rent: "",

    }



    const [mediaFormData, setMediaFormData] = useState(mediaForm)

    const [mediaFormErrors, setMediaErrors] = useState({})


    const addContent = (evt) => {

        evt.preventDefault();

        const formData = new FormData();

        let route = "";

        formData.append('title', mediaFormData.title);
        formData.append('synopsis', mediaFormData.synopsis);
        formData.append('releaseDate', mediaFormData.releaseDate);
        formData.append('mpa_rating', mediaFormData.mpa_rating);
        formData.append('genre', mediaFormData.genre);
        formData.append('cast', mediaFormData.cast);
        if (mediaFormData.poster) {
            formData.append('poster', mediaFormData.poster.files[0]);
        }
        formData.append('trailer', mediaFormData.trailer);
        if (mediaFormData.movieFile) {
            formData.append('movieFile', mediaFormData.movieFile.files[0]);
        }
        formData.append('purchase', mediaFormData.purchase);
        formData.append('rent', mediaFormData.rent);
        formData.append('featured', mediaFormData.featured);

        if (!mediaFormData.type) {

            setMediaErrors({ typeError: "Please select Movie or TV show" })

        }
        else {
            if (mediaFormData.type === "movie") {

                route = "http://localhost:5000/movies"
                alert(route)

            } else {

                route = "http://localhost:5000/tvShows"
                alert(route)

            }

            fetch(
                route,
                {
                    method: "POST",
                    body: formData
                }
            )
                .then(res => res.json())
                .then((json) => {

                    setMediaErrors(json.data)
                    console.log(json.data)

                })
                .catch(err => console.log(`Error :${err}`));
        }


    }


    return (
        <form onSubmit={addContent}>
            <div className="field">
                <label className="label">Is this a movie of a TV show?</label>
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="answer" value="movie" onChange={
                            (evt) => {

                                setMediaFormData({
                                    ...mediaFormData, type: evt.target.value
                                })

                                setMediaErrors({
                                    ...mediaFormErrors, typeError: null
                                })

                            }
                        } />
                        Movie
                    </label>
                    <label class="radio">
                        <input type="radio" name="answer" value="tv-show" onChange={
                            (evt) => {

                                setMediaFormData({
                                    ...mediaFormData, type: evt.target.value
                                })

                                setMediaErrors({
                                    ...mediaFormErrors, typeError: null
                                })
                            }
                        } />
                        TV Show
                    </label>
                </div>
                {
                    mediaFormErrors.typeError &&
                    <p className="help is-danger">{mediaFormErrors.typeError}</p>

                }
            </div>

            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" value={mediaFormData.title}
                        onChange={
                            (evt) => {

                                setMediaFormData({
                                    ...mediaFormData, title: evt.target.value
                                })

                                setMediaErrors({
                                    ...mediaFormErrors, titleError: null
                                })
                            }
                        } />
                </div>
                {
                    mediaFormErrors.titleError &&
                    <p className="help is-danger">{mediaFormErrors.titleError}</p>

                }
            </div>
            <div className="field">
                <label className="label">Synopsis</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Textarea"
                        onChange={
                            (evt) => {

                                setMediaFormData({
                                    ...mediaFormData, synopsis: evt.target.value
                                })

                                setMediaErrors({
                                    ...mediaFormErrors, synopsisError: null
                                })
                            }
                        }>

                    </textarea>
                    {
                        mediaFormErrors.synopsisError &&
                        <p className="help is-danger">{mediaFormErrors.synopsisError}</p>

                    }
                </div>
            </div>
            <div className="field">
                <label className="label">Release Date</label>
                <div className="control">
                    <input className="input" type="date" onChange={
                        (evt) => {

                            setMediaFormData({
                                ...mediaFormData, releaseDate: evt.target.value
                            })

                            setMediaErrors({
                                ...mediaFormErrors, releaseDateError: null
                            })
                        }
                    } />
                </div>
                {
                    mediaFormErrors.releaseDateError &&
                    <p className="help is-danger">{mediaFormErrors.releaseDateError}</p>

                }
            </div>
            <div className="field is-grouped">
                <label className="label">MPA Rating</label>
                <div className="control">
                    <div className="select">
                        <select onChange={
                            (evt) => {

                                setMediaFormData({
                                    ...mediaFormData, mpa_rating: evt.target.value
                                })

                                setMediaErrors({
                                    ...mediaFormErrors, mpa_ratingError: null
                                })
                            }
                        }>
                            <option value="E">E</option>
                            <option value="PG 13">PG 13</option>
                            <option value="R">R</option>
                        </select>
                    </div>
                    {
                        mediaFormErrors.mpa_ratingError &&
                        <p className="help is-danger">{mediaFormErrors.mpa_ratingError}</p>

                    }
                </div>

                <label className="label">Genre</label>
                <div className="control">
                    <div className="select is-multiple">
                        <select multiple onChange={
                            (evt) => {

                                const genreOptions = evt.target.selectedOptions;

                                const genreValues = Array.from(genreOptions).map(({ value }) => value);

                                setMediaFormData({
                                    ...mediaFormData, genre: genreValues
                                })

                                setMediaErrors({
                                    ...mediaFormErrors, genreError: null
                                })
                            }
                        }>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Action">Action</option>
                        </select>
                    </div>
                    {
                        mediaFormErrors.genreError &&
                        <p className="help is-danger">{mediaFormErrors.genreError}</p>

                    }
                </div>
                <label className="label">Cast</label>
                <div className="control">
                    <div className="select is-multiple">
                        <select multiple onChange={
                            (evt) => {

                                const castOptions = evt.target.selectedOptions;

                                const castValues = Array.from(castOptions).map(({ value }) => value);

                                setMediaFormData({
                                    ...mediaFormData, cast: castValues
                                })
                                setMediaErrors({
                                    ...mediaFormErrors, castError: null
                                })

                            }
                        }>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Mouse">Mouse</option>
                        </select>
                    </div>
                    {
                        mediaFormErrors.synopsisError &&
                        <p className="help is-danger">{mediaFormErrors.castError}</p>

                    }
                </div>
            </div>
            <div className="field">
                <label className="label">Add Poster</label>
                <div className="control">
                    <input className="input" type="file" placeholder="Select Poster" onChange={
                        (evt) => {

                            setMediaFormData({
                                ...mediaFormData, poster: evt.target
                            })
                            setMediaErrors({
                                ...mediaFormErrors, posterError: null
                            })
                        }

                    } />
                </div>
                {
                    mediaFormErrors.posterError &&
                    <p className="help is-danger">{mediaFormErrors.posterError}</p>

                }
            </div>
            <div className="field">
                <label className="label">Add Trailer</label>
                <div className="control">
                    <input className="input" type="url" placeholder="Select Trailer" onChange={
                        (evt) => {

                            setMediaFormData({
                                ...mediaFormData, trailer: evt.target.value
                            })
                            setMediaErrors({
                                ...mediaFormErrors, trailerError: null
                            })
                        }
                    } />
                </div>
                {
                    mediaFormErrors.trailerError &&
                    <p className="help is-danger">{mediaFormErrors.trailerError}</p>

                }
            </div>
            {
                mediaFormData.type === 'movie' &&
                <div className="field">
                    <label className="label">Add Movie File</label>
                    <div className="control">
                        <input className="input" type="file" placeholder="Select Movie File" onChange={
                            (evt) => {

                                setMediaFormData({
                                    ...mediaFormData, movieFile: evt.target
                                })
                                setMediaErrors({
                                    ...mediaFormErrors, movieError: null
                                })
                            }
                        } />
                    </div>
                    {
                        mediaFormErrors.movieError &&
                        <p className="help is-danger">{mediaFormErrors.movieError}</p>

                    }
                </div>

            }
            <div className="field is-grouped">
                <label className="label">Purchase Price: </label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" value={mediaFormData.purchase}
                        onChange={
                            (evt) => {

                                setMediaFormData({
                                    ...mediaFormData, purchase: evt.target.value
                                })
                                setMediaErrors({
                                    ...mediaFormErrors, purchaseError: null
                                })
                            }
                        } />
                    {
                        mediaFormErrors.purchaseError &&
                        <p className="help is-danger">{mediaFormErrors.purchaseError}</p>

                    }
                </div>
                <label className="label">Rental Price: </label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" value={mediaFormData.rent}
                        onChange={
                            (evt) => {

                                setMediaFormData({
                                    ...mediaFormData, rent: evt.target.value
                                })
                                setMediaErrors({
                                    ...mediaFormErrors, rentError: null
                                })
                            }
                        } />

                    {
                        mediaFormErrors.rentError &&
                        <p className="help is-danger">{mediaFormErrors.rentError}</p>

                    }
                </div>
                <label class="checkbox">
                    <div className="control">
                        <input type="checkbox" onChange={
                            (evt) => {

                                if (evt.target.checked) {

                                    setMediaFormData({
                                        ...mediaFormData, featured: true
                                    })
                                    alert("Featured")
                                }
                                else {
                                    setMediaFormData({
                                        ...mediaFormData, featured: false
                                    })
                                    alert("Not Featured")
                                }


                            }
                        } />
                        Feature this content?
                    </div>
                </label>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default AddMedia
