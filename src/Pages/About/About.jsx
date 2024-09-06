import { useState } from "react";

function About() {
    // State for the count value
    const [number, setNumber] = useState(0);

    // Function to increase the count
    const increase = () => {
        setNumber(number + 1); // Correct function syntax
    };

    // Function to decrease the count
    const decrease = () => {
        setNumber(number - 1);
    };

    return (
        <>
            <h1>{number}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </>
    );
}

export default About;
