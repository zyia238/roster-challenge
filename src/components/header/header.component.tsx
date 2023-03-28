import React from "react";
import classes from "@/styles/header.module.css";
import { Avatar } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.logo}>roster</div>
      <div className={classes.rightSide}>
        <div className={classes.datePicker}>
          <div className={classes.arrow}>
            <KeyboardArrowLeftIcon fontSize="large" sx={{cursor:'pointer'}} />
          </div>
          <div className={classes.button}>Weekly</div>
          <div className={classes.button} style={{ marginRight: 0 , background:'rgb(211, 211, 211)', color:'rgb(133, 133, 133)' , fontSize:14 , cursor:'not-allowed'}}>
            03/08/21 - 09/08/21
          </div>
          <div className={classes.arrow}>
            <KeyboardArrowRightIcon fontSize="large" sx={{cursor:'pointer'}}/>
          </div>
        </div>
        <div className={classes.profile}>
          <EmailOutlinedIcon fontSize="large" sx={{marginRight:'26px', cursor:'pointer'}} />
          <Avatar sx={{ width: 30, height: 30, fontSize: 18 , cursor:'pointer'}}>Z</Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
