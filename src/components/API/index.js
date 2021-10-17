export default async function fetchAPI(url) {
    try {
        const response = await fetch(url);
        console.log(response.status); 
        const data = await response.json();
        return data;

    }
    catch (err) {
        console.log(err);
        return [];
    }
}