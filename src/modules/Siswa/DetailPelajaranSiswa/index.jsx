import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 395,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  titleCard: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const DetailPelajaranSiswa = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              SMKN-1 BERINGIN
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button color="inherit">Hai fadli</Button>
              <Button color="inherit">Beranda</Button>
              <Button color="inherit">Logout</Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>

      <Container>
        <Box mt={7}>
          <b>Silahkan Pilih Mata Pelajaran</b>
          <br />
          <span>Fadli E-SMK Student</span>
          <br />
        </Box>
        <Grid container spacing={6}>
          <Box mt={6} mr={2} boxShadow={3}>
            <Grid item xs={6} sm={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.titleCard}
                    color="textSecondary"
                    gutterBottom
                  >
                    Kompetensi
                  </Typography>
                  <Typography variant="h5" component="h2">
                    KOMPETENSI DASAR
                  </Typography>
                  <Typography variant="body2" component="p">
                  <span>Kompetensi dasar dilihat dari spektrum dan setiap materi</span><br/>
                    <span>
                      disesuaikan dengan RPP dan dilabus setiap Guru/MGMP
                    </span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    Pelajari Sekarang
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Box>
          <Box mt={6} mr={2} boxShadow={3}>
            <Grid item xs={6} sm={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.titleCard}
                    color="textSecondary"
                    gutterBottom
                  >
                    Kompetensi
                  </Typography>
                  <Typography variant="h5" component="h2">
                    KOMPETENSI DASAR
                  </Typography>
                  <Typography variant="body2" component="p">
                    <span>Kompetensi dasar dilihat dari spektrum dan setiap materi</span><br/>
                    <span>
                      disesuaikan dengan RPP dan dilabus setiap Guru/MGMP
                    </span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    Pelajari Sekarang
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Box>
          <Box mt={6} mr={2} boxShadow={3}>
            <Grid item xs={6} sm={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.titleCard}
                    color="textSecondary"
                    gutterBottom
                  >
                    Kompetensi
                  </Typography>
                  <Typography variant="h5" component="h2">
                    KOMPETENSI DASAR
                  </Typography>
                  <Typography variant="body2" component="p">
                    <span>Kompetensi dasar dilihat dari spektrum dan setiap materi</span><br/>
                    <span>
                      disesuaikan dengan RPP dan dilabus setiap Guru/MGMP
                    </span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    Pelajari Sekarang
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Box>
          <Box mt={6} mr={2} boxShadow={3}>
            <Grid item xs={6} sm={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.titleCard}
                    color="textSecondary"
                    gutterBottom
                  >
                    Kompetensi
                  </Typography>
                  <Typography variant="h5" component="h2">
                    KOMPETENSI DASAR
                  </Typography>
                  <Typography variant="body2" component="p">
                  <span>Kompetensi dasar dilihat dari spektrum dan setiap materi</span><br/>
                    <span>
                      disesuaikan dengan RPP dan dilabus setiap Guru/MGMP
                    </span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    Pelajari Sekarang
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Box>
          <Box mt={6} mr={2} boxShadow={3}>
            <Grid item xs={6} sm={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.titleCard}
                    color="textSecondary"
                    gutterBottom
                  >
                    Kompetensi
                  </Typography>
                  <Typography variant="h5" component="h2">
                    KOMPETENSI DASAR
                  </Typography>
                  <Typography variant="body2" component="p">
                    <span>Kompetensi dasar dilihat dari spektrum dan setiap materi</span><br/>
                    <span>
                      disesuaikan dengan RPP dan dilabus setiap Guru/MGMP
                    </span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    Pelajari Sekarang
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Box>
          <Box mt={6} mr={2} boxShadow={3}>
            <Grid item xs={6} sm={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.titleCard}
                    color="textSecondary"
                    gutterBottom
                  >
                    Kompetensi
                  </Typography>
                  <Typography variant="h5" component="h2">
                    KOMPETENSI DASAR
                  </Typography>
                  <Typography variant="body2" component="p">
                    <span>Kompetensi dasar dilihat dari spektrum dan setiap materi</span><br/>
                    <span>
                      disesuaikan dengan RPP dan dilabus setiap Guru/MGMP
                    </span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    Pelajari Sekarang
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default DetailPelajaranSiswa;
