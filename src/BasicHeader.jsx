import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MediaQuery from "react-responsive";
import { ImMail3 } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { MdPermIdentity } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicHeader = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Welcome"].map((text, index) => (
          <ListItem key={text} disablePadding className="hover:bg-gray-200">
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {["Log In / Sign Up"].map((text, index) => (
          <ListItem key={text} disablePadding className="hover:bg-gray-200">
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className="flex flex-row">
        {["Language"].map((text, index) => (
          <ListItem key={text} disablePadding className="hover:bg-gray-200">
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
         <Box sx={{ minWidth: 120 }} className="pr-4">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="English" >English</MenuItem>
          <MenuItem value="हिंदी">हिंदी</MenuItem>
          <MenuItem value="मराठी">मराठी</MenuItem>
          <MenuItem value="বাংলা">বাংলা</MenuItem>
          <MenuItem value="தமிழ்">தமிழ்</MenuItem>
          <MenuItem value="ગુજરાતી">ગુજરાતી</MenuItem>
          <MenuItem value="ಕನ್ನಡ">ಕನ್ನಡ</MenuItem>
          <MenuItem value="മലയാളം">മലയാളം</MenuItem>
          <MenuItem value="తెలుగు">తెలుగు</MenuItem>
          <MenuItem value="ਪੰਜਾਬੀ">ਪੰਜਾਬੀ</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </List>
      <Divider />
      <List>
        {["Home"].map((text, index) => (
          <ListItem key={text} disablePadding className="hover:bg-gray-200">
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          "Services",
          "About Us",
          "Why Us",
          "Gallery",
          "Videos",
          "Testimonials",
          "Contact Us",
          "Privacy Policy",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="mb-10">
      <MediaQuery maxWidth={412}>
        <div className="flex justify-between my-4 w-full pr-2">
          <div>
            {["Left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <button
                  onClick={toggleDrawer(anchor, true)}
                  className="text-black"
                >
                  <BiMenu />
                </button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          <p className="font-bold ml-7 italic">Sthapna</p>
          <div className="flex flex-row gap-4 pt-1 ml-">
            <FiShoppingCart />
            <a href="tel:+91-8890073787"><IoCallOutline /></a>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={413}>
        <div className="flex sm:flex-row mt-2 justify-between flex-col">
          <div className="flex flex-row">
            <div className="flex flex-row gap-2 ml-4 sm:ml-16 lg:ml-24">
            <a href="tel:+91-8890073787" className="text-xl mt-2 hover:text-orange-500"><IoCall /></a>
              <ImMail3 className="text-xl mt-2 hover:text-orange-500" />
              <p className="font-extrabold text-2xl hover:text-orange-500">
                JD
              </p>
            </div>
            <div className="flex flex-col md:flex-row">
            <a href="tel:+91-8890073787" className="ml-6 flex flex-row hover:text-orange-500 text-gray-700">
              <div className="ml-6 flex flex-row hover:text-orange-500 text-gray-700">
                <IoCallOutline className="text-xl mt-2" />
                <p className="pl-2 mt-1">+91-8890073787</p>
              </div>
              <div className="ml-6 flex flex-row hover:text-orange-500 text-gray-700">
                <AiOutlineMail className="text-xl mt-2 " />
                <p className="pl-2 mt-1">archimaya83@gmail.com</p>
              </div>
              </a>
            </div>
          </div>
          <div>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-row hover:text-orange-500">
                <SlLocationPin className="text-xl mt-2 " />
                {/* <p className="pl-1 mt-1">Sodala</p> */}
                <a
                  href="https://maps.google.com/maps/dir//Sthapna+architects+WQ2G%2B78G+Ramnagar+Main+Rd,+Shiv+Puri+Colony,+Sodala+Jaipur,+Rajasthan+302007/@26.9006775,75.7758423,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x396db59e54a6e2b9:0x9781ff1d59d9fd54"
                  className="pl-1 mt-1"
                >
                  Sodala
                </a>
              </div>
              <div className="flex flex-row mr-8 text-gray-700 hover:text-orange-500">
                <MdPermIdentity className="text-xl mt-2 " />
                <p className="pl-1 mt-1 text-gray-500 hover:text-orange-500">
                  Login
                </p>
                <p className="pl-1 mt-1 text-gray-500">|</p>
                <p className="pl-1 mt-1 text-gray-500 hover:text-orange-500">
                  Sign Up
                </p>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

export default BasicHeader;
