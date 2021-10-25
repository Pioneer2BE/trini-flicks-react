import React from 'react'

const MediaCard = (props) => {
    return (
        <div className="column">
            <h1>{props.title}</h1>
            <p>{props.synopsis}</p>
        </div>
    )
}

export default MediaCard
