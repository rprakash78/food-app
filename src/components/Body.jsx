import Card from "./Card";
// import resData from "../utils/data.json"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  const fetchData = async () => {
    let data = await fetch(
      "https://dev-383898640355784.api.raw-labs.com/restaurants"
    );
    data = await data.json();
    setListOfRestaurants(data);
    setFilteredRestaurants(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="header-btns">
        <div className="search">
          <input type="text" id="search-txt" onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
          <button id="search-btn" onClick={() => {
            if(searchText != '') {
                const filteredData = filteredRestaurants.filter((data) => data.restaurant_name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurants(filteredData);
            } else {
                setFilteredRestaurants(listOfRestaurants);
            }
            
          }}>Search</button>
        </div>
        <div className="filter">
          <button
            id="filter-btn"
            onClick={() => {
              const filteredData = listOfRestaurants.filter(
                (data) => data?.ratings > 4.4
              );
              setListOfRestaurants(filteredData);
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((data) => (
          <Card key={data?.restaurant_id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
