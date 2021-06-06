import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class Slide extends React.Component {
    render() {
        const images = [
            {
                original: '/ochamado/slides/sl1.png',
                thumbnail: '/ochamado/slides/sl1.png',
            },
            {
                original: '/ochamado/slides/sl2.png',
                thumbnail: '/ochamado/slides/sl2.png',
            },
            {
                original: '/ochamado/slides/sl3.png',
                thumbnail: '/ochamado/slides/sl3.png',
            },
            {
                original: '/ochamado/slides/sl4.png',
                thumbnail: '/ochamado/slides/sl4.png',
            },
            {
                original: '/ochamado/slides/sl5.png',
                thumbnail: '/ochamado/slides/sl5.png',
            }
        ]
        return (
            <ImageGallery items={images} autoPlay={true} />
        );
    }
}