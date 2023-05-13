import './Cards.scss'
import button from '../../../../assets/main/section2/Vector.svg'
const Card = (props) => {
    return (
        <div className="Card">
            <img className='cars' src={props.img} alt="img"/>
            <img className='button' src={button}/>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default Card;