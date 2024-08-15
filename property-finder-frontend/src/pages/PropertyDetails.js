import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/properties/${id}`)
      .then((response) => {
        setProperty(response.data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fatching property details:", error)
      );
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!property) return <p>Property not found.</p>;

  return (
    <div>
      <h1>{property.name}</h1>
      <img src={property.image} alt={property.name} />
      <p>{property.location}</p>
      <p>{property.price}</p>
    </div>
  );
};

export default PropertyDetails;
