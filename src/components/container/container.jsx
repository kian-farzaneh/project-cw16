import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Container(props) {

    const { randomNumber } = props

    const [number, setNumber] = useState('');
    const [guessCount, setGuessCount] = useState(10);
    const [history, setHistory] = useState([]); // به عشق آقا فرشید
    const [gameOver, setGameOver] = useState(false);

    function handlerInput(e) {
        setNumber(Number(e.target.value))
    };

    function handleBtn() {

        setGuessCount(guessCount - 1);

        setHistory((prev) => [...prev, number]);

        if (guessCount > 0) {
            if (number === randomNumber) {
                toast.success(`you're right`)
                setGameOver(true)
            }
        } else {
            toast.error('your apportunity was finished')
            setGameOver(true)
        };


        console.log(randomNumber);
    };


    return <>
        <div className="w-full h-screen bg-blue-300 flex justify-center items-center">
            <div className="flex flex-col gap-4 w-[300px] h-[300px]">
                <input value={number} type="text" onChange={handlerInput} className="outline-none p-2 text-center"/>
                <button disabled={gameOver} onClick={handleBtn} className="bg-green-500 p-2 disabled:bg-gray-500 disabled:cursor-not-allowed">guess</button>
                <div className="min-w-[100px] h-[100px] overflow-y-scroll bg-white">
                    {history.map((his, index) => <p key={index}>{his}</p>)}
                </div>
            </div>
        </div>

    </>;
};

export default Container;