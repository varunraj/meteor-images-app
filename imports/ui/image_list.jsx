import React from 'react'
import ImageDetail from './image_detail';


// image data 

// const IMAGES = [
//     { title: 'Pen' , link: 'https://dummyimage.com/600x400' },
//     { title: 'Pine Tree', link: 'https://dummyimage.com/600x400' },
//     { title: 'Mug', link:'https://dummyimage.com/600x400' }
// ];


const ImageList = (props) =>{

    const validImages = props.images.filter((image)=> !image.is_album)
    
    const renderedImages = validImages.map((image)=>{
        return <ImageDetail key={image.id} image={image} />  
    })

    return (
        <ul className="media-list media-group">
            {renderedImages}
        </ul>
    )
}

export default ImageList;