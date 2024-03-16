import { useState } from "react";
const Animals=["bird","cat","dog","rabbit","reptile"] 
const SearchParams=()=>{
    const [location, setLocation]=useState("")
    const [animal, setAnimal]=useState("")
    return(
        <div className="search-params">
            <form>
        <label htmlFor="location">
            Location
            <input 
            onChange={(e)=>setLocation(e.target.value)}
            id="location" 
            value={location} 
            placeholder="Location"/>
        </label>
        <label htmlFor="animal">
            Animal
           <select 
           id="animal"
           value={animal}
           onChange={(e)=>setAnimal(e.target.value)}
           >
            {Animals.map((animal)=>(
                <option key={animal}>{animal}</option>
            ))}
           </select>
        </label>
        <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SearchParams