import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard"

{
  /*const restaurantList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "423115",
      "name": "THE PASTA KING",
      "uuid": "c3596f95-fca1-4446-b810-83d2807e972a",
      "city": "18",
      "area": "Ganesh Nagar",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "iforbkkavepfftcgxoqw",
      "cuisines": [
        "Asian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "slaString": "36 MINS",
      "lastMileTravel": 6.099999904632568,
      "slugs": {
        "restaurant": "the-pasta-king-old-palasia-old-palasia",
        "city": "indore"
      },
      "cityState": "18",
      "address": "189, Ganesh Nagar Colony, Near Shiv Mandir Indore, Indore, Indore, Indore, Madhya Pradesh - 452010",
      "locality": "Vijay Nagar",
      "parentId": 235377,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 7200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 7200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "7200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6868278~p=1~eid=00000188-a246-9d91-0d1b-616a008c016f",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "423115",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 6.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "64541",
      "name": "Oye24",
      "uuid": "1389d6c6-4757-49b1-8e83-f0d4a97156b2",
      "city": "18",
      "area": "Pardesipura",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "r3hc8fyoajjgkmjszx2k",
      "cuisines": [
        "North Indian",
        "Pizzas",
        "South Indian",
        "Desserts",
        "Chinese",
        "Thalis",
        "Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "oye24-hig-lig-new-palasia",
        "city": "indore"
      },
      "cityState": "18",
      "address": "Plot no.134,scheme No. 91,Malwa mill Anaj Mandi,Near water tank,Pardesipura, HIG-LIG, Indore",
      "locality": "91th Scheme",
      "parentId": 5208,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "64541",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "300595",
      "name": "Royal curries",
      "uuid": "ad5c5ecf-d010-45b2-81f9-b6345844e492",
      "city": "18",
      "area": "Vijay Nagar",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "wz8spgcvkgrryi6vthyq",
      "cuisines": [
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "royal-curries-bhawar-kuan-bhawar-kuan-2",
        "city": "indore"
      },
      "cityState": "18",
      "address": "SCHEME NO 91, 134 ANAJ MANDI, MALWA MILL, Indore, Indore, Indore, Madhya Pradesh - 452001",
      "locality": "91th Scheme",
      "parentId": 172004,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 3700,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "300595",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.7",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
];*/
}

const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [search, setSearch] = useState("")

  const filterRestaurants = () => {
    const filteredRest = allRestaurant.filter(rstrt => rstrt.data.name.includes(search))    
    setRestaurantList(filteredRest)
  }

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(json.data.cards[2].data.data.cards);
    setAllRestaurant(json.data.cards[2].data.data.cards)
  }

  
  useEffect(() => {
    getRestaurants();
    
    //console.log(restaurantList)
  }, []);
  //console.log(1)
  return (
    <>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-outline-success" onClick={filterRestaurants}>
              Search
            </button>

      <div className="d-flex flex-wrap ">
        {restaurantList.map((item, index) => (
          <RestaurantCard
            className="box"
            key={index}
            name={item.data.name}
            image={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_280,h_200,c_fill/" +
              item.data.cloudinaryImageId
            }
            type={item.data.cuisines}
            distance={
              "Distance: " + Math.round(item.data.lastMileTravel) + " km"
            }
          />
        ))}
      </div>
    </>
  );
};

export default Body;
