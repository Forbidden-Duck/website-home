import React from 'react';
import './Website.css';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default function Website(props) {
    const { website } = props;
    return (
        <article key={website.id} style={{ marginLeft: 10 }}>
            <Card>
                <div className="container">
                    <div className="image-container">
                        <img
                            src={website.image}
                            alt={website.title}
                        />
                    </div>
                    <div className="details-container">
                        <a href={website.link} target="_blank" rel="noreferrer">
                            <h3 className="post-title">
                                <FontAwesomeIcon icon={faLink} size="sm" />
                                &nbsp;{website.title}
                            </h3>
                        </a>
                        <p>{website.description}</p>
                    </div>
                </div>
            </Card>
        </article>
    );
}