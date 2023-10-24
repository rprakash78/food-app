import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Menu = () => {
  const [info, setInfo] = useState([]);

  const fetchMenu = async () => {
    let menuData = await fetch(
      "https://dev-383898640355784.api.raw-labs.com/detail/1"
    );
    menuData = await menuData.json();
    setInfo(menuData);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return info.length > 0 && info[0].restaurant_id ? (
    <div className="menu">
      <h1>Restraunt Menu</h1>
      <h2>Name: {info[0].place}</h2>
      <h3>Location: {info[0].address}</h3>
      <h4>Menu:</h4>
      {info[0].menu?.map((data) => {
        console.log('DATA IS >>> ', data)
        return (
          <ul key={data.restaurant_id} className="menu-items">
            <li>{data.item} - Rs {data.price}</li>
            <li>{data.item} - Rs {data.price}</li>
            <li>{data.item} - Rs {data.price}</li>
          </ul>
        );
      })}
    </div>
  ) :  <Shimmer/>
};

export default Menu;
