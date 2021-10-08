
import { Link } from 'react-router-dom';

export default function Products (props) {

    return (
        <div className = "Container"> 
            <img className="FontCover" src={props.info.image} alt="" /> 
            <div className = "Title"> {props.info.title} </div>
            <div className = "Price"> {props.info.price} </div>

            <Link to={{
                pathname: '/details',
                state: props.info
            }}> 
                <button > See details </button>
            </Link>
        </div>

    )
}