import React from 'react';
import ImageList from '../ui/image_list'
import axios from 'axios';
const CLIENT_ID = 'Client-ID 59031983a19f225'


export class  App extends React.Component {

  constructor(props){
    super(props);
    this.state = {images:[]}
  }


  componentWillMount(){
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0', {
      headers: {
        Authorization: CLIENT_ID
      }
    })
    .then(response => this.setState({images: response.data.data}))
    .catch((err)=>console.log(err));
  
  }


  render(){
    return (
            <div>
              <ImageList images={this.state.images}/> 
            </div>
        )
    }
};

