import React, { useState, useEffect } from "react";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38],
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

export default function MapComponent() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch location data from your backend API
    fetch("http://localhost:3000/locations")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });
  }, []);

  return (
    <MapContainer
      center={[21.250689713118504, 81.66294534727444]} // Set Raipur's coordinates here
      zoom={15} // Adjust the zoom level as needed
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.latitude, location.longitude]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <h3>{location.name}</h3>
                <p>{location.description}</p>
                <p>{location.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
