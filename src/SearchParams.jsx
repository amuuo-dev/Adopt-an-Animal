const SearchParams=()=>{
    const location="Nairobi Kenya";
    return(
        <div className="search-params">
            <form>
        <label htmlFor="location">
            Location
            <input id="location" value={location} placeholder="Location"/>
        </label>
        <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SearchParams