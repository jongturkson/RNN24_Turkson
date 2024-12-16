import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [currentLevel, setCurrentLevel] = useState('');
    const levels = ['Bronze', 'Silver', 'Bold', 'Platinum',];

    function add() {
        if (count >= 25){
            alert('You cannot go beyond 25');
            return;
        }
        setCount(count => count + 1);
    }

    function subtract() {
        if(count <= 0){
            alert('You cannot subtract below zero');
        }
        setCount(count => count - 1);

    }

    // Mounting => When the component mounts
    useEffect(() => {
        console.log('Component mounted');
    }, []);

    // Update => When the component updates based on change of count state
    useEffect(() => {
        console.log('Count changed to ' + count)
        switch (true) {
            case count >= 5 && count < 10:
                setCurrentLevel(levels[0])
                break;
            case count >= 10 && count < 15:
                setCurrentLevel(levels[1])
                break;
            case count >= 15 && count < 20:
                setCurrentLevel(levels[2])
                break;
            case count >= 20 && count < 25:
                setCurrentLevel(levels[3])
                break;
            default:
                setCurrentLevel('')
                break;
        }
    }, [count]);

    return (
        <div>
            {currentLevel=='' ? (
                <p>You are getting Started</p>
            ) : (
                <p>You are in level: {currentLevel}</p>
            )}
            <button onClick={subtract} >Subtract</button>
            <span>{count}</span>
            <button onClick={add} >Add</button>
        </div>

    )

}

export default Counter;