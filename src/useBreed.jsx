import { useState, useEffect } from "react";
const localCache = {};
//this is created so that when one selects animal from option breedlist is projectes  breeds from the api
function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  //here to show the status of data
  //unloaded means no animal is selected
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    //this is when the page is loaded
    if (!animal) {
      setBreedList([]);
    }
    // if have seen the animal in my localStorage,,like if
    // it was selected first and one went to next and returned to first..like it dosnt request again in local storage
    //but uses the previous one
    else if (localCache[animal]) {
      //this is when we have selected the animal before
      setBreedList(localCache[animal]);
    }
    //this is when  clicks another animal it requests the breeds
    //from the api
    else {
      //this is when we have never selected the animal before
      requestBreedList();
    }
    //this is the function that requests the breed list from the api
    async function requestBreedList() {
      //this is when we have never selected the animal before
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
      );
      const data = await res.json();
      console.log(data);
      //it stores the breed list in the local storage
      //so that it dosnt request again
      //like if one selects dog and goes to next and returns to dog
      localCache[animal] = data.breeds;
      //it sets the breedlist and status
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
    // run above function only when animal changes
  }, [animal]);
  //return the breedlist and status
  return [breedList, status];
}
export default useBreedList;
