import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = (props) => {
    const {restaurant_name, cuisine, ratings, delivery_time, img_url} = props.resData;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img alt="res-logo" className="res-logo" src={img_url}/>
            <h3><Link to='/detail'>{restaurant_name}</Link></h3>
            <h5>{cuisine.join(', ')}</h5>
            <h5>{ratings} stars</h5>
            <h5>{delivery_time} mins</h5>
        </div>
    )
}

export default Card;