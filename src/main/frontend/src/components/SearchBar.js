const SearchBar = () => {
    return (
        <div>
            <form className="searchBar">
                <input 
                    type="text"
                    name="searchbar"
                    placeholder="Enter keywords"
                />
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default SearchBar