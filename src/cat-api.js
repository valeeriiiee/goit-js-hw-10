const BASE_URL ="https://api.thecatapi.com/v1"
const API_KEY = "live_R3ytlFEt7W9G1osrKvMkc7qbHAw6swA9O77q0PftMJ5bTDMxHQJGNcqVWL14c4ZN"


export function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then((res) => {
        if (!res.ok) {
            throw new Error(res.status);
        } else {
            return res.json();
        }
    });      
}

export function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`).then((res) => {
        if (!res.ok) {
            throw new Error(res.status);
        } else {
            return res.json();
        }
    }); 
}