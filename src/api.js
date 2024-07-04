import axios from 'axios'

const ImageSearch = async(searchTerm)=>{
    const response = await axios.get('https://api.unsplash.com',{
        headers:{
            Authorization: 'Client-ID  -Ivs9876LfRQGDxqojtBLg64OJebeM2-_pfZvUIkJOw'
        },
        params:{
            query: searchTerm,
        }
    })
    return response.data.results;
    
}



export default ImageSearch;