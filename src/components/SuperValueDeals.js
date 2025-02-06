import React, { useState, useEffect } from "react";

const SuperValueDeals = () => {
  const [locationDetails, setLocationDetails] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if Geolocation API is available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Fetch exact location using OpenStreetMap Nominatim API
          fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=en`
          )
            .then((response) => response.json())
            .then((data) => {
              // Extract relevant address information dynamically
              const suburb = data.address?.suburb || data.address?.neighbourhood || "Unknown Suburb";
              const city = data.address?.city || data.address?.town || "Unknown City";
              const ward = data.address?.ward || "Unknown Ward";

              // Combine suburb, ward, and city dynamically
              const location = `${suburb}, ${city}`;
              setLocationDetails(location);
            })
            .catch((error) => {
              console.error("Error fetching location details:", error);
              setErrorMessage("Unable to fetch location details");
            });
        },
        (error) => {
          console.error("Error with geolocation:", error);
          setErrorMessage("Location permission denied");
        }
      );
    } else {
      setErrorMessage("Geolocation not supported by your browser");
    }
  }, []);

  return (
    <div className="col-md-10 col-12 d-flex" style={{ alignItems: "center" }}>
      {/* <span>Super Value Deals - Save more with coupons</span> */}
      {locationDetails && (
        <span style={{ marginLeft: "10px" }}>
          ({locationDetails})
        </span>
      )}
      {errorMessage && (
        <span style={{ color: "red", marginLeft: "10px" }}>
          {errorMessage}
        </span>
      )}
    </div>




  );
};

export default SuperValueDeals;
