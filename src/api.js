import axios from 'axios'

const ImageSearch = async(searchTerm)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            // Authorization: 'Client-ID  -gsXgq7Cwb8YwE2OYb4D5wtixu0ijlnw-wwz5zR2PpY'
            Authorization: 'Client-ID -gsXgq7Cwb8YwE2OYb4D5wtixu0ijlnw-wwz5zR2PpY'
        },
        params:{
            query: searchTerm,
        }
    })
    return response.data.results;
    
}



export default ImageSearch;