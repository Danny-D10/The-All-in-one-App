import './Css/SearchBar.css'
import {useState} from 'react'
function SearchBar({onSubmit}){
    const formHundle=(event)=>{
        event.preventDefault();
            onSubmit(searchTerm)
    }
const [searchTerm,setSearchTerm] = useState('');
    const handleValue=(event)=>{
        setSearchTerm(event.target.value);
    }

    return(
        <div className='bar'>
            <form onSubmit={formHundle}>
                <label>Enter anything to get an Image</label>
                <input  value={searchTerm} onChange={handleValue}/>
            </form>
        </div>
    )

}
export default SearchBar;