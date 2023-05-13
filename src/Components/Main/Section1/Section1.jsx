import "./Section1.css";
import background from "./assets/Rectangle2.svg"
import button from "../../../assets/header/Button 36px.svg";
const Section1 = (props) => {
    return (
        <div>
            <section style={{
                backgroundImage: `url(${background})`
            }}>
                <div className="start-image">
                    <h1>{props.description.description}</h1>
                    <div className="actions">
                        {
                            props.actions.map(el => <span>  <img src={el.img} alt="img" key={el.id}/> {el.description}</span>)
                        }
                    </div>
                </div>
                <div className='strong-sides'>
                    {
                        props.strong_sides.map(el => <div>
                            <img src={el.img} alt="img" key={el.id}/>
                            <div>
                                <h3>{el.title}</h3>
                                <p>{el.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </section>
            <div className='inquiry-send'>
                <div>
                    <h1>
                        Send an inquiry now and get the best offers suitable for your requirements
                    </h1>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
                <img src={button}/>
            </div>
        </div>
    )
}

export default Section1
