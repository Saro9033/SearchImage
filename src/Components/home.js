import React from "react";
import Search from "./search";
import ImageList from "./imageList";
import axios from 'axios';


class home extends React.Component{
    constructor(props){
        super(props)
        this.state = {images : []}
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
      }
 
    async onSearchSubmit(entry){
      const response = await axios.get(`https://pixabay.com/api/?key=37975666-90ce9aef9164d568a312d783f&q=${entry}&image_type=photo&pretty=true`)
      this.setState({images:response.data.hits})
      console.log(response.data.hits)  
  
    }

render(){
    return(
        <div >
     <Search onSearchSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images} />
       </div>
    )
}
}


export default home