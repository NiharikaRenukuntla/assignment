import React, { useState, useEffect } from "react";
import { Route, Switch, useParams } from "react-router";
import { Grid, Box } from "@material-ui/core";
import FeaturesCard from "../components/FeaturesCard";
import ProfileContent from "../components/ProfileContent";
import { useDetails } from "../context/UsersContext";
import { BrowserRouter } from "react-router-dom";
import ChatComponent from "./ChatComponent";

const UserProfileComponent = () => {
  const { id } = useParams();
  const [users] = useDetails();
  const [userDetails, setUserDetails] = useState({
    name: "",
    userName: "",
    phone: "",
    website: "",
    company: "",
    catchphrase: "",
    bs: "",
    profilepicture: "",
    email: "",
    address: {
      street: "",
      suit: "",
      city: "",
      zipcode: "",
    },
    lat: null,
    lng: null,
  });
  useEffect(() => {
    loadUserProfile(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const loadUserProfile = (id) => {
    let user = users.find((user) => {
      return user.id === parseInt(id);
    });
    setUserDetails({
      name: user.name,
      userName: user.username,
      phone: user.phone,
      website: user.website,
      company: user["company"].name,
      catchphrase: user["company"].catchPhrase,
      bs: user["company"].bs,
      email: user.email,
      profilepicture: user.profilepicture,
      address: user.address,
      lat: user["address"].geo.lat,
      lng: user["address"].geo.lng,
    });
  };
  return (
    <div>
      {userDetails ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
            padding: "20px",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "90%",
              padding: "20px",
            }}
          >
            <Grid container spacing={3}>
              <BrowserRouter>
                <Grid item xs={2}>
                  <FeaturesCard id={id} />
                </Grid>
                <Grid item xs={10}>
                  <Switch>
                    <Route exact path="/posts">
                      <Box m="auto">
                        {" "}
                        <h1> posts under construction</h1>
                      </Box>
                    </Route>
                    <Route exact path="/gallery">
                      <Box m="auto">
                        {" "}
                        <h1>gallery under construction</h1>
                      </Box>
                    </Route>
                    <Route exact path="/todo">
                      <Box m="auto">
                        {" "}
                        <h1>todo under construction</h1>
                      </Box>
                    </Route>
                    <Route path="/">
                      <ProfileContent id={id} user={userDetails} />
                    </Route>
                  </Switch>
                </Grid>
              </BrowserRouter>
            </Grid>
          </div>
        </div>
      ) : (
        ""
      )}
      <Box
        textAlign="right"
        marginRight="0px"
        marginBottom="70px"
        position="absolute"
        bottom="10px"
        right="20px"
        borderRadius="20px"
        width="200px"
      >
        <ChatComponent />
      </Box>
    </div>
  );
};

export default UserProfileComponent;
