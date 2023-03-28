import React, { useContext } from "react";
import classes from "@/styles/filter.module.css";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Files from '@/assets/files.png'
import { DailyContext } from "@/pages";

type Props = {};

let mapper = {
  shift1: 8,
  shift2: 2,
  shift3: 3,
  shift4: 1,
};

let dayMapper = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Filter = (props: Props) => {
  const {setEmpolyeeList , setShiftList , employesList , shiftList} : any = useContext(DailyContext) 
  const handlePublish = () => {
    for(let i = 0 ; i < employesList.length; i++){
      for(let j = 0 ; j < 7 ;j++){
        for(let k = 0; k < employesList[i][dayMapper[j]].length; k++){
          employesList[i][dayMapper[j]][k].unPublished = false
        }
      }
    }
    let dummy = [...employesList];
    setEmpolyeeList(dummy);

    for(let i = 0 ; i < shiftList.length; i++){
      for(let j = 0 ; j < 7 ;j++){
        for(let k = 0; k < shiftList[i][dayMapper[j]].length; k++){
          shiftList[i][dayMapper[j]][k].unPublished = false
        }
      }
    }
    let dummy2 = [...shiftList];
    setShiftList(dummy2);

    console.log(dummy,dummy2)
  }
  return (
    <div className={classes.filterContainer} style={{ marginTop: "15px" }}>
      <div className={classes.left}>
        <FilterListOutlinedIcon
          fontSize="large"
          style={{ marginRight: "83px" }}
        />
        <div className={classes.underscore}>
          <div>
            Search
            <SearchOutlinedIcon fontSize="small" className={classes.suffix} />
          </div>
        </div>
        <div className={classes.underscore}>
          <div>
            Departments
            <ArrowDropDownIcon fontSize="small" className={classes.suffix} />
          </div>
        </div>
        <div className={classes.underscore}>
          <div>
            Job Layer1
            <ArrowDropDownIcon fontSize="small" className={classes.suffix} />
          </div>
        </div>
        <div className={classes.underscore}>
          <div>
            Job Layer2
            <ArrowDropDownIcon fontSize="small" className={classes.suffix} />
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.exports}>
          <img src={Files.src} alt="" style={{height:'40px'}}/>
        </div>
        <div className={classes.publish} onClick={handlePublish}>Publish</div>
      </div>
    </div>
  );
};

export default Filter;
