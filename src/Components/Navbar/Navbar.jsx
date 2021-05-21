import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

export default function ButtonAppBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img
              src="https://images.assets-landingi.com/UPpF9WjIxWIkhLeY/travclan_logo_latest.png"
              alt="logo"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
