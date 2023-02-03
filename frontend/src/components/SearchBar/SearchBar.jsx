import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = ({setFilteredTournaments}) => {
    const[searchInput,setsearchInput]=useState('')
    const[change, setChange]=useState([])

    function handleSubmit(e){
        e.preventDefault();
        let search= {
            searchInput:searchInput};
       
        console.log(search)
        setFilteredTournaments(searchInput)
    }
    
    return ( 
        <div>
            <form className='searchtool' onSubmit ={handleSubmit} >
                {/* <label className="searchlabel" style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Find Tournament</label> */}
                <input 
                    className=''
                    type='string' 
                    placeholder='Find your tournament...'
                    value ={searchInput} 
                    onChange={(e)=>setsearchInput(e.target.value)}/>
                <button type='submit' className='searchbutton'>search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;
