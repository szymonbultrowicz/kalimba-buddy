import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

interface NavMenuProperties {
  open: boolean;
  onClose: () => void;
}

export const NavMenu = ({ open, onClose }: NavMenuProperties) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 250, maxWidth: "100vw" }}>
        <ListItem key="home" disablePadding component={Link} to="/">
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem key="settings" disablePadding component={Link} to="/settings">
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
