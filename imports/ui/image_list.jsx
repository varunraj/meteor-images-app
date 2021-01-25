import React from 'react'
import ImageDetail from './image_detail';


// image data 

const IMAGES = [
    { title: 'Pen' , link: 'https://dummyimage.com/600x400' },
    { title: 'Pine Tree', link: 'https://dummyimage.com/600x400' },
    { title: 'Mug', link:'https://dummyimage.com/600x400' }
];


const ImageList = () =>{
    
    const renderedImages = IMAGES.map((image)=>{
        return <ImageDetail />  
    })

    return (
        <ul>
            {renderedImages}
        </ul>
    )
}

export default ImageList;