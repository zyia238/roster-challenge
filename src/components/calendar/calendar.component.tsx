import React, { useContext, useState } from "react";
import classes from "@/styles/calendar.module.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import RosterRow from "../rosterRow/rosterRow.component";
import { DailyContext } from "@/pages";

type Props = {};

const employeesList = [
  {
    name: "Brad",
  },
  {
    name: "Pete",
  },
  {
    name: "Jesse",
  },
  {
    name: "Greg",
  },
  {
    name: "Cameron",
  },
  {
    name: "Junwoo",
  },
];

const Calendar = (props: Props) => {
  const {shiftList ,dailyForecast }:any = useContext(DailyContext)
  const [currentOption, setCurrentOption] = useState("Employees");


  const [currentWeek, setCurrentWeek] = useState([
    {
      date: 11,
      day: "MON",
    },
    {
      date: 12,
      day: "TUE",
    },
    {
      date: 13,
      day: "WED",
    },
    {
      date: 14,
      day: "THUR",
    },
    {
      date: 15,
      day: "FRI",
    },
    {
      date: 16,
      day: "SAT",
    },
    {
      date: 17,
      day: "SUN",
    },
  ]);

  const handleChange = (e: SelectChangeEvent<string>) => {
    setCurrentOption(e.target.value);
  };

  return (
    <div className={classes.calendarContainer}>
      <div className={classes.topRow}>
        <FormControl
          sx={{ width: "12.08vw", marginRight: "2.178vw" }}
          size="small"
        >
          <InputLabel id="demo-select-small">Option</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentOption}
            label="Option"
            onChange={handleChange}
          >
            <MenuItem value={"Employees"}>Employees</MenuItem>
            <MenuItem value={"Shifts"}>Shifts</MenuItem>
          </Select>
        </FormControl>
        {/* 日期 */}
        <div className={classes.grid}>
          {currentWeek.map((day,index) => {
            return (
              <div className={classes.dayBlockContainer} key={index}>
                <div className={classes.dayBlock}>
                  <div>{day.date}</div>
                  <div>{day.day}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {currentOption === "Employees" ? (
        <div className={classes.rowWrapper}>
          {employeesList.map((employee, index) => {
            return <RosterRow employee={employee} key={index}></RosterRow>;
          })}
        </div>
      ) : (
        <div className={classes.rowWrapper}>
          {shiftList.map((shift:any, index:any) => {
            return <RosterRow shift={shift.name} key={index}></RosterRow>;
          })}
        </div>
      )}

      <div className={classes.footers}>
        <div className={classes.row}>
          <div className={classes.namePart}>Forecast</div>
          <div className={classes.grid}>
            {dailyForecast.map((item :any ,index:number) => {
              return (
                  <div className={classes.item} key={index}>
                    <div>{item.hours} hours</div>
                    <div>${item.cost}</div>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
