import { useState, useEffect } from "react";
import Pet from "./Pet";
const Animals=["bird","cat","dog","rabbit","reptile"] 
const SearchParams=()=>{
    const [location, setLocation]=useState("")
    const [animal, setAnimal]=useState("")
    const [breeds, setBreed]=useState("")
    const breedTypes=[];
    const [pets, setPets]=useState([]);

    useEffect(()=>{
        requestPets()
    },[]);  // eslint-disable-line react-hooks/exhaustive-deps
     
    async function requestPets(){
        const res=await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breedTypes}`)
        const data=await res.json()
        setPets(data.pets)
    }

    return(
        <div className="search-params">
            <form onSubmit={(e)=>{
                e.preventDefault();
                requestPets();
            }}>
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
            {pets.map((pet) => (
            <Pet
                name={pet.name}
                animal={pet.animal}
                breed={pet.breed}
                key={pet.id}
            />
            ))}
        </div>
    )
}
export default SearchParams