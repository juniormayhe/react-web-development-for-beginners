import React, { useState, useEffect } from "react";

const DividingCalculator = () => {
  const [results, setResults] = useState([]);
  const [datasetKey] = useState("bad");
  const [pairs] = useState({
    good: [
      { numerator: 1, denominator: 2 },
      { numerator: 1, denominator: 1 },
    ],
    bad: [
      { numerator: 1, denominator: 2 },
      { numerator: 1, denominator: 0 },
    ],
  });

  const divide = (numeratorValue, denominatorValue) => {
    if (parseFloat(denominatorValue) === 0) {
      throw new Error(
        `Division by zero is not allowed. Numerator: ${numeratorValue}, Denominator: ${denominatorValue}`
      );
    }

    const quotient = parseFloat(numeratorValue) / parseFloat(denominatorValue);
    return quotient.toFixed(2);
  };

  useEffect(() => {
    const calculatedResults = pairs[datasetKey].map((pair) => {
      console.log("pair", pair.numerator);
      return divide(pair.numerator, pair.denominator);
    });
    setResults(calculatedResults);
  }, [datasetKey, pairs]);

  return (
    <div>
      <h3>Results</h3>
      {results.map((result, index) => (
        <p key={index}>
          {pairs[datasetKey][index].numerator} /{" "}
          {pairs[datasetKey][index].denominator} ={result}
        </p>
      ))}
    </div>
  );
};

export default DividingCalculator;
