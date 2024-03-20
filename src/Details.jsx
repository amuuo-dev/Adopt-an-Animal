import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  //["details", id] will be passed as the queryKey to fetchPet
  //like if you dont have the ideals of the id run fetchPet go and get if for me
  const results = useQuery(["details", id], fetchPet);
  //loading stage
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  //incase of error in the fetch.js
  if (results.isError) {
    return <h2>OH NO!! an error has occurred</h2>;
  }

  //assume it has finished loading
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <h3>{pet.name}</h3>
      <h2>
        {pet.animal} - {pet.breed} - {pet.city} , {pet.state}
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </h2>
    </div>
  );
};
export default Details;
