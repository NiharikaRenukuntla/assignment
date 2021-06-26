import React, { useState, useEffect } from "react";
import { Route, Switch, useParams, useLocation } from "react-router";
import { Grid, Box, Divider, Typography } from "@material-ui/core";
import FeaturesCard from "../components/FeaturesCard";
import { useDetails } from "../context/UsersContext";
import { BrowserRouter } from "react-router-dom";
import ProfileDataComponent from "./ProfileDataComponent";
import AddressData from "./AddressData";
import ExampleImage from "../assets/ExampleMapImage.png";
import UserContext from "../context/UsersContext";
import ChatComponentOne from "../components/ChatComponentOne";
import ProfileDropdownComponent from "./ProfileDropdownComponent";

const UserProfileComponent = () => {
  const [users] = useDetails();
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
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
    id: "",
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
      id: user.id,
    });
  };
  return (
    <Box bgcolor="#f5f5f5" textAlign="center" height="95vh">
      <BrowserRouter>
        {userDetails ? (
          <Box style={{ margin: "40px", position: "relative" }}>
            <Grid container>
              <Grid item xs={2} sm={2}>
                <Box height="84vh">
                  <FeaturesCard />
                </Box>
              </Grid>
              <Switch>
                <Route path="/posts">
                  <Grid item xs={10} sm={10}>
                    <Box textAlign="center" marginTop="20%">
                      <Typography variant="h5">
                        Posts under construction
                      </Typography>
                    </Box>
                  </Grid>
                </Route>
                <Route path="/gallery">
                  <Grid item xs={10} sm={10}>
                    <Box textAlign="center" marginTop="20%">
                      <Typography variant="h5">
                        Gallery under construction
                      </Typography>
                    </Box>
                  </Grid>
                </Route>
                <Route path="/todo">
                  <Grid item xs={10} sm={10}>
                    <Box textAlign="center" marginTop="20%">
                      <Typography variant="h5">
                        Todo under construction
                      </Typography>
                    </Box>
                  </Grid>
                </Route>

                <Route path="/">
                  <Grid
                    item
                    xs={10}
                    sm={10}
                    container
                    style={{ position: "relative" }}
                  >
                    <UserContext>
                      <ProfileDataComponent user={userDetails} />
                    </UserContext>
                    <Grid item xs={1}>
                      <Box
                        height="50vh"
                        marginTop="18vh"
                        color="#b6b6b6"
                        textAlign="left"
                      >
                        <Divider orientation="vertical" variant="inset" />
                      </Box>
                    </Grid>
                    <Grid item xs={6} container>
                      <AddressData userDetails={userDetails} />
                      <Grid item xs={12}>
                        <img
                          src={ExampleImage}
                          width="500px"
                          height="400px"
                          style={{ marginLeft: "30px" }}
                          alt="locationImage"
                        />
                      </Grid>
                      <Grid item xs={5} align="right">
                        <UserContext>
                          <ChatComponentOne user={userDetails} />
                        </UserContext>
                      </Grid>
                    </Grid>
                  </Grid>
                </Route>
              </Switch>
            </Grid>
            <UserContext>
              <ProfileDropdownComponent user={userDetails} />
            </UserContext>
          </Box>
        ) : (
          ""
        )}
      </BrowserRouter>
    </Box>
  );
};

export default UserProfileComponent;