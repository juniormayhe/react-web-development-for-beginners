import React, { useState, useEffect } from "react";

const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/220px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Alan_Kay_at_the_Getty_Museum.jpg/220px-Alan_Kay_at_the_Getty_Museum.jpg",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/President_Roosevelt_-_Pach_Bros_%28cropped%29.jpg/220px-President_Roosevelt_-_Pach_Bros_%28cropped%29.jpg",
    },
];

function QuoteGenerator() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [authorImage, setAuthorImage] = useState(null);

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuoteIndex(randomIndex);
    };

    useEffect(() => {
        setAuthorImage(quotes[currentQuoteIndex].image);
    }, [currentQuoteIndex]);

    return (
        <div>
            <p>
                "{quotes[currentQuoteIndex].quote}" - {quotes[currentQuoteIndex].author}
            </p>
            <img src={authorImage} alt="Author" />
            <br />
            <button onClick={handleClick}>Next Quote</button>
        </div>
    );
}

export default QuoteGenerator;
