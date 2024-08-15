import { Link } from "react-router-dom";

const PropertyCArd = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} />
      <h2>{property.name}</h2>
      <p>{property.location}</p>
      <p>{property.price}</p>
      <Link to={`/property/${property.id}`}>View Details</Link>
    </div>
  );
};
