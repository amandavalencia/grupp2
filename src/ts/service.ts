import { get } from "./servicebase";


export const searchPeople = async() => {
    const response = await get("https://swapi.dev/api/people");
    return response.results;

}


