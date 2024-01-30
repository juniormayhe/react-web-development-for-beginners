import { useState, useEffect } from 'react';

// A custom hook to fetch data.
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchData() {

            // This timeout is to simulate a delay,
            // so you can see the loading.
            // Don't use this in production environment.
            await new Promise(resolve => setTimeout(resolve, 2000));

            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        fetchData();
    }, [url]);

    return { data, loading };
}

export default useFetch;