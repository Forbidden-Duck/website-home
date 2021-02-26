import React from "react";
import './App.css';
import Website from "./components/Website/Website";
import websites from "./utils/websites";

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
                <section className="title">
                    <img
                        src={process.env.PUBLIC_URL + "/resources/IAmSquare.jpg"}
                        alt="Professional"
                    />
                    <h1>Hello, I am Harrison Howard</h1>
                </section>
                <section className="websites">
                    <h2>My available websites are</h2>
                    <div className="website-list">
                        {
                            websites.map(website => <Website website={website} />)
                        }
                    </div>
                </section>
            </main>
        </>
    );
}