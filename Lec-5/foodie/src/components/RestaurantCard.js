const RestaurantCard = (props) => {
  
    return (
      <div className="m-2 p-2 d-flex flex-column align-items-center border border-primary abcde">
        <img className="pb-2" src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <h5 className="text max-width-60">{props.type.join(", ")}</h5>
    <h5>{props.distance}</h5>
      </div>
    );
  };
  export default RestaurantCard