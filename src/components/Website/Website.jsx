import React from 'react';
import './Website.css';
import Card from '../Card/Card';

export default function Website(props) {
    const { website } = props;
    return (
        <article key={website.id} style={{ marginLeft: 10 }}>
            <Card>
                <div className="container">
                    <div className="image-container">
                        <img
                            src={process.env.PUBLIC_URL + "/resources/IAmSquare.jpg"}
                        />
                    </div>
                    <div className="details-container">
                        <h3 className="post-title">{website.title}</h3>
                        <p>{website.description}</p>
                    </div>
                </div>
            </Card>
        </article>
    );
}