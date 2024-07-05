import './Css/ImageList.css'
import ImageShow from "./ImageShow";
function ImageList({images}){
    const showImages = images.map((image)=>{
        return <ImageShow key="image.id" image={image}/>
        
    })
    return (
        <div className="ImageList">{showImages}</div>
    )

}
export default ImageList;
