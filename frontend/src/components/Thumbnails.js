import React from "react";
import classes from "./css/thumbnails.module.css";
import { Link } from "react-router-dom";
import Price from "./Price";
export default function Thumbnails({shoes}) {
    return (
    <ul className={classes.list}>
        {
            shoes.map(shoes => (
                    <li key={shoes.id}>
                    <Link to={`/shoes/${shoes.id}`}>
                        <img className={classes.image}
                            src={`${shoes.imageUrl}`}
                            alt={shoes.name} />
                    <div className={classes.content}>
                        <div className={classes.name}>{shoes.name}</div>
                        <div className={classes.size}>{shoes.size}</div>
                        <div className={classes.condition}>Condition:{shoes.condition}</div>
                        <div className={classes.price}><Price price={shoes.price} /></div>
                    </div>

                    </Link>
                </li>
        ))}
    </ul>
    );
}