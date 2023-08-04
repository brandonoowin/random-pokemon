import React from 'react'

function Sprite({name, url}) {
    return (
        <div>
            <img src={url} alt={name} />
        </div>
)}

export default Sprite;