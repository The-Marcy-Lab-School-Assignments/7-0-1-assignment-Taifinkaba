import { useState } from "react";

function GifSearch({ setQuery }) {
    const [query, setQueryState] = useState('');

    const onChangedInput=(e)=>{
        setQueryState(e.target.value)
    }

    const onSubmitForm = (event) => {
      event.preventDefault();
      setQuery(query)
    };
    return (
        <form onSubmit={onSubmitForm}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" value={query} onChange={onChangedInput} />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch
