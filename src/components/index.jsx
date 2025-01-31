import React from "react";
import Container from "./container/container";




export default function Index() {
    let randomNumber = Math.floor(Math.random() * 100);
    return <>

        <Container randomNumber={randomNumber}/>
    </>;
}