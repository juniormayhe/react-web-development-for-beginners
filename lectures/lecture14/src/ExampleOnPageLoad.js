import { useState, useEffect } from 'react';

function ExampleOnPageLoad() {
    const [data, setData] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            const result = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await result.json();
            setData(data);

            console.log('effect within');
        };
        fetchData();
    }, []);

    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}

export default ExampleOnPageLoad;