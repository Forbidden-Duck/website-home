import React from "react";
import './App.css';

export default function App() {
    return (
        <>
            <div
                id="background"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "/resources/IAmCircle.jpg"})`
                }}
            ></div>
            <main>
                <div className="title">
                    <img
                        src={process.env.PUBLIC_URL + "/resources/IAmSquare.jpg"}
                        alt="Professional"
                    />
                    <h1>Hello, I am Harrison Howard</h1>
                </div>
            </main>
        </>
    );
}