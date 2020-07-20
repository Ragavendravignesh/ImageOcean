import React from 'react'
import Unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
    state= { images : [] }
    onFormSumit = async (text) => {
        const response= await Unsplash.get('/search/photos',{
            params : { query :text }
        })
        this.setState ({ images : response.data.results })
    }
    render(){
        return (
            <div className="ui container">  
                <SearchBar onSubmit = { this.onFormSumit }/> 
                <ImageList images = {this.state.images} />
            </div>
        );
    }
}

export default App