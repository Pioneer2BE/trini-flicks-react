import React from 'react'
import MediaCard from './MediaCard'

const MediaShelf = (props) => {

    { console.log(props.medias) }

    return (
        <section className="columns">
            {/*
            {props.medias.map((media) => (<MediaCard key={media._id} title={media.title} synopsis={media.synopsis} />))}
            */}
        </section>
    )
}

export default MediaShelf
