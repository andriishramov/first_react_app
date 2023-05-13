import Card from "./Card/Card";
import './Section2.scss'
import {NavLink, Route, Routes} from "react-router-dom";

const Section2 = (props) => {
    return (
        <section className="Cards">
            {
                props.cards.map(card => <Card img={card.img} title={card.title} description={card.description} price={card.price}/>)
            }
        </section>
    )
}

export default Section2;
