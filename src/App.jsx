import React from "react";
import './App.css';
import Website from "./components/Website/Website";
import getRandomNumber from "./utils/getRandomNumber";

export default function App() {
    const makeWebsite = () => {
        return {
            id: getRandomNumber(100, 999),
            title: "I am title",
            description: "I am description"
        };
    };
    return (
        <>
            <div
                id="background"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "/resources/IAmCircle.jpg"})`
                }}
            ></div>
            <main>
                <section className="title">
                    <img
                        src={process.env.PUBLIC_URL + "/resources/IAmSquare.jpg"}
                        alt="Professional"
                    />
                    <h1>Hello, I am Harrison Howard</h1>
                </section>
                <section className="websites">
                    <h2>My available websites are</h2>
                    <div class="website-list">
                        <Website website={makeWebsite()} />
                        <Website website={makeWebsite()} />
                        <Website website={makeWebsite()} />
                    </div>
                </section>
            </main>
        </>
    );
}