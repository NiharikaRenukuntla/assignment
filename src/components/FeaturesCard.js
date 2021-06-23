import { Box } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const FeaturesCard = (props) => {
  const { id } = props;
  return (
    <div
      style={{
        backgroundColor: "#5522cc",
        height: "80vh",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box p={2} width="80%">
        <NavLink
          style={{ textDecoration: "none", color: "#dddddd" }}
          to={`/userDashboard/${id}`}
        >
          Profile
        </NavLink>
        <hr style={{ width: "60%" }} />
        <NavLink
          style={{ textDecoration: "none", color: "#dddddd" }}
          to="/posts"
        >
          Posts
        </NavLink>
        <hr style={{ width: "60%" }} />
        <NavLink
          style={{ textDecoration: "none", color: "#dddddd" }}
          to="/gallery"
        >
          Gallery
        </NavLink>
        <hr style={{ width: "60%" }} />
        <NavLink
          style={{ textDecoration: "none", color: "#dddddd" }}
          to="/todo"
        >
          Todo
        </NavLink>
        <hr style={{ width: "60%" }} />
      </Box>
    </div>
  );
};

export default FeaturesCard;

FeaturesCard.propTypes = {
  id: PropTypes.string
};

FeaturesCard.defaultProps = {
  id: ""
};
