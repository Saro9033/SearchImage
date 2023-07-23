import React from "react";

const imageList = (props) =>{
    const images = props.images.map((image) =>{
        return <img style={{padding:'5px'}} width={200} height={200} key={image.id} src={image.webformatURL} alt="images"/>
    })

    return(
        <div>
            {
          <center> 
          {images} 
          </center> 
            }
        </div>
    )
}

export default imageList