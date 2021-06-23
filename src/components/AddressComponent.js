import React from "react";
import { Typography, Grid } from "@material-ui/core";
import MapComponent from "./MapComponent";
import PropTypes from "prop-types";

const AddressComponent = (props) => {
  const { address } = props;
  return (
    <Grid container item xs={12} spacing={1}>
      <Grid item xs={12} align="left">
        <Typography variant="caption"> Address</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="subtitle1">Street</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">:</Typography>
      </Grid>
      <Grid item xs={9} align="left">
        <Typography variant="subtitle1">{address.street}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="subtitle1">Suite</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">:</Typography>
      </Grid>
      <Grid item xs={9} align="left">
        <Typography variant="subtitle1">{address.suite}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="subtitle1">City</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">:</Typography>
      </Grid>
      <Grid item xs={9} align="left">
        <Typography variant="subtitle1">{address.city}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="subtitle1">Zipcode</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">:</Typography>
      </Grid>
      <Grid item xs={9} align="left">
        <Typography variant="subtitle1">{address.zipcode}</Typography>
      </Grid>
      <Grid item xs={12}>
        {address.geo ? (
          <div style={{ height: "40vh", width: "90%" }}>
            <MapComponent addressData={address.geo} />
          </div>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};

export default AddressComponent;

AddressComponent.propTypes = {
  address: PropTypes.array
};

AddressComponent.defaultProps = {
  address: []
};