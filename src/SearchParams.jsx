import { useState } from "react";
const Animals=["bird","cat","dog","rabbit","reptile"] 
const SearchParams=()=>{
    const [location, setLocation]=useState("")
    const [animal, setAnimal]=useState("")
    const [breeds, setBreed]=useState("")
    const breedTypes=[];
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
           onChange={(e)=>{setAnimal(e.target.value);
            setBreed("");
           }}
           >
               <option />
            {Animals.map((animal)=>(
                <option key={animal}>{animal}</option>
            ))}
           </select>
        </label>
        <label htmlFor="breeds">
            Breed
           <select 
           id="breeds"
           disabled={breedTypes.length===0}
           value={breeds}
           onChange={(e)=>setBreed(e.target.value)}
           >
               <option />
            {breedTypes.map((breed)=>(
                <option key={breed}>{breed}</option>
            ))}
           </select>
        </label>
        <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SearchParams