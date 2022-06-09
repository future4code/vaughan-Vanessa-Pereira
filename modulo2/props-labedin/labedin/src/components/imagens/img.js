import React from 'react';
import './img.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemButton;