import React, {useState} from 'react'


 const Search = ({getQuery}) => {

    const [text,setText] =useState('')
    const onChangeHandler =(q)=>{
        setText(q);
        getQuery(q)
    }
    return (
        <div className="container search-field">
            <input 
            type="search"
            placeholder="Search"
            value={text }
            onChange={(e)=>onChangeHandler(e.target.value)}
            />
        </div>
    )
}

export default Search;