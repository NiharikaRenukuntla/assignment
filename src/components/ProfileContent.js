import { Typography, Grid, Avatar, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddressComponent from "./AddressComponent";
import SimpleDialog from "./ProfileDialog";
import { useLocation } from "react-router";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  small: {
    width: theme.spacing(3.4),
    height: theme.spacing(3.4),
  },
  big: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));
const ProfileContent = (props) => {
  const { user } = props;
  const location = useLocation();
  console.log(location.pathname);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <Grid container>
        <Grid item xs={10} align="left">
          <Typography variant="subtitle1">Profile</Typography>
        </Grid>
        <Grid item container xs={2}>
          <Grid item xs={2}>
            <Box marginLeft={2} onClick={handleClickOpen}>
              <Avatar src={user.profilepicture} className={classes.small} />
            </Box>
          </Grid>
          <Grid item xs={10} onClick={handleClickOpen}>
            <Typography variant="caption">{user.name}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Box
            display="flex"
            m={4}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Avatar
              src={user.profilepicture}
              className={classes.big}
              style={{ m: "10px" }}
            />
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="subtitle1">username</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="subtitle1">:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="subtitle1">{user.userName}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">email</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="subtitle1">:</Typography>
              </Grid>

              <Grid item xs={7}>
                <Typography variant="subtitle1">{user.email}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">phone</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="subtitle1">:</Typography>
              </Grid>

              <Grid item xs={7}>
                <Typography variant="subtitle1">{user.phone}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">website</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="subtitle1">:</Typography>
              </Grid>

              <Grid item xs={7}>
                <Typography variant="subtitle1">{user.website}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">company </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">name</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="subtitle1">:</Typography>
              </Grid>

              <Grid item xs={7}>
                <Typography variant="subtitle1">{user.company}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">catchphrase</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="subtitle1">:</Typography>
              </Grid>

              <Grid item xs={7}>
                <Typography variant="subtitle1">{user.catchphrase}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">bs</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="subtitle1">:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="subtitle1">{user.bs}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box m={6} p={3}>
            <AddressComponent address={user.address} geo={user} />
          </Box>
        </Grid>
      </Grid>
      <SimpleDialog open={open} onClose={handleClose} user={user} />
    </div>
  );
};

export default ProfileContent;

ProfileContent.propTypes = {
  user: PropTypes.object
};

ProfileContent.defaultProps = {
  user: {}
};
