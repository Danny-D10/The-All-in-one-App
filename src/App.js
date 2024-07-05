import { useState } from "react";
import SearchBar from "./Sections/SearchBar";
import ImageSearch from "./api";
import ImageList from "./Sections/ImageList"

function App(){
    const [images,setImages] = useState([])
    const hundleAll = async(searchTerm)=>{
        const result = await ImageSearch(searchTerm)
         setImages(result);
    } 
    return(
        <div>
       <SearchBar onSubmit={hundleAll} />
       <ImageList images={images}/>
    </div>
    )
    
}
export default App;