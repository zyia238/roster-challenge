import React from 'react'
import classes from '@/styles/nav.module.css'
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import SettingsIcon from '@mui/icons-material/Settings';

type Props = {}

const Navigation = (props: Props) => {
  return (
    <div className={classes.navContainer}>
      <div className={classes.upperWrapper}>
          <HomeIcon fontSize='large'/>
          <FormatListBulletedIcon  fontSize='large'/>
          <AccessTimeIcon  fontSize='large'/>
          <LocationOnIcon  fontSize='large'/>
          <DescriptionIcon  fontSize='large'/>
          <PermPhoneMsgIcon  fontSize='large'/>
      </div>
      <div className={classes.bottomWrapper}>
          <SettingsIcon fontSize='large'/>
      </div>
    </div>
  )
}

export default Navigation