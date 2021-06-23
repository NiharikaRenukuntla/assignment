import GoogleMapReact from "google-map-react";
import React from "react";
import PropTypes from "prop-types";

const MapComponent = (props) => {
  const { lat, lng } = props.addressData;
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyB7Z6-gylZ-1m1dbMkn3ocxaKM2TgtxOxE" }}
      defaultZoom={2}
      center={{ lat: parseInt(lat), lng: parseInt(lng) }}
    />
  );
};

export default MapComponent;

MapComponent.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

MapComponent.defaultProps = {
  lat: 0,
  lng: 0,
};