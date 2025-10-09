// dataFetcher.js

/**
 * High-level utility to asynchronously fetch JSON data from a given URL.
 * It includes basic error handling for network and HTTP status issues.
 * @param {string} url - The API endpoint URL.
 * @returns {Promise<Object>} - A promise that resolves with the parsed JSON data.
 * @throws {Error} - Throws an error if the network request fails or the status is not 2xx.
 */
async function fetchData(url) {
    try {
        console.log(`Attempting to fetch data from: ${url}`);
        const response = await fetch(url);

        // High-level check for successful response status
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Data successfully fetched and parsed.');
        return data;

    } catch (error) {
        // Re-throw a more contextual error
        console.error(`Error during data fetch for ${url}:`, error.message);
        throw new Error(`Failed to retrieve data. Details: ${error.message}`);
    }
}

// Example usage (assuming an API like JSONPlaceholder for demonstration)
/*
(async () => {
    try {
        const posts = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Retrieved Post Title:', posts.title);
    } catch (e) {
        console.error('Application failed:', e.message);
    }
})();
*/

export { fetchData };
