import { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    axios
      .get("/api/properties")
      .then((response) => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Property Finder</h1>
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCArd key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
