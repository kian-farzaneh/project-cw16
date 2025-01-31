import React, { useEffect, useState } from "react";

function Container(props) {

    const { randomNumber } = props

    const [number, setNumber] = useState('');
    const [guessCount, setGuessCount] = useState(10);
    const [history, setHistory] = useState([]); // به عشق آقا فرشید
    const [gameOver,setGameOver] = useState(false);

    function handlerInput(e) {
        setNumber(Number(e.target.value))
    };

    function handleBtn() {

        setGuessCount(guessCount - 1);

        setHistory((prev) => [...prev, number]);

        if (guessCount > 0) {
            if (number === randomNumber) {
                alert(`you're right`)
                setGameOver(true)
            }
        } else {
            alert('your apportunity was finished')
            setGameOver(true)
        };


        console.log(randomNumber);
    };


    return <>
        <div className="w-full h-screen bg-blue-300 flex-col flex justify-center items-center">
            <input value={number} type="text" onChange={handlerInput} />
            <button disabled={gameOver} onClick={handleBtn}>guess</button>
            <div className="min-w-[100px] h-[100px] overflow-hidden">
                { history.map((his,index)=> <p key={index}>{his}</p>)}
            </div>
        </div>
    </>;
};

export default Container;