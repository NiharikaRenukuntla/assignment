import { Box, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const FeaturesCard = (props) => {
  const { id } = props;
  return (
    <div
      style={{
        backgroundColor: "#5522cc",
        height: "88vh",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box p={2} width="70%" m={1}>
        <NavLink
          style={{ textDecoration: "none", color: "#dddddd" }}
          to={`/design/${id}`}
        >
          <Typography variant="subtitle1" align="left">
            Profile
          </Typography>
        </NavLink>
        <hr style={{ width: "100%", color: "#cccccc" }} />
        <NavLink
          style={{ textDecoration: "none", color: "#dddddd" }}
          to="/posts"
        >
          <Typography variant="subtitle1" align="left">
            Posts
          </Typography>
        </NavLink>
        <hr style={{ width: "100%", color: "#cccccc" }} />

        <NavLink
          style={{ textDecoration: "none", color: "#dddddd" }}
          to="/gallery"
        >
          <Typography variant="subtitle1" align="left">
            Gallery
          </Typography>
        </NavLink>
        <hr style={{ width: "100%", color: "#cccccc" }} />
        <NavLink
          style={{ textDecoration: "none", color: "#dddddd" }}
          to="/todo"
        >
          <Typography variant="subtitle1" align="left">
            Todo
          </Typography>
        </NavLink>
        <hr style={{ width: "100%", color: "#cccccc" }} />
      </Box>
    </div>
  );
};

export default FeaturesCard;

FeaturesCard.propTypes = {
  id: PropTypes.string,
};

FeaturesCard.defaultProps = {
  id: "",
};
