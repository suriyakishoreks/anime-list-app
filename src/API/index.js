export default async function fetchAPI(url, signal = null) {
    try {
        const response = await fetch(url, {
            signal: signal
        });
        // console.log(response.status); 
        const data = await response.json();
        return data;

    }
    catch (err) {
        console.log(err);
        return [];
    }
}