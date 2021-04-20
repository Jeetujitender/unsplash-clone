import React from 'react';
import './ImageList.css';

const ImageList = props => {
    const images = props.images.map(image => {
        return <img alt={image.desription} key={image.id} src={image.urls.regular} />
    })
    return <div className="flex"> {images}</div>
}
export default ImageList;