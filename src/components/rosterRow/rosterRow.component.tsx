// @ts-nocheck.
import React, { useContext, useState } from "react";
import classes from "@/styles/rosterRow.module.css";
import BasicPopover from "@/components/popover/popover.component";
import BasicPopover2 from "@/components/popover/popover2.component";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { DailyContext } from "@/pages";

type Props = {
  employee?: any;
  shift?: any;
};

let mapper = {
  shift1: "8am - 4pm" as any,
  shift2: "5pm - 7pm" as any,
  shift3: "8pm - 11pm" as any,
  shift4: "11pm - 12pm" as any,
} as any;

const RosterRow = ({ employee, shift }: Props) => {
  const {
    employesTimeList,
    employesList,
    setEmpolyeeList,
    shiftList,
    shiftTimeList,
    setShiftList,
  }: any = useContext(DailyContext);

  const popoverClick = (day: string, shiftName: string, employee: any) => {
    let dummy = [...employesList];
    let target = dummy.find((item) => item.name === employee.name);
    if (!target[day].includes(shiftName)) {
      target[day].push({ shiftName, unPublished: true });
      setEmpolyeeList(dummy);
    }

    let dummy2 = [...shiftList];
    let target2 = dummy2.find((item) => item.name === shiftName);
    if (!target2[day].includes(employee.name)) {
      target2[day].push({ employeeName: employee.name, unPublished: true });
      setShiftList(dummy2);
    }
  };
  let target;
  if (shift) {
    target = shiftTimeList.find((item:any) => item.name === shift);
  } else {
    target = employesTimeList.find((item:any) => item.name === employee.name);
  }
  let flag = true;

  let target2;
  if (shift) {
    target2 = shiftList.find((item:any) => item.name === shift);
  } else {
    target2 = employesList.find((item:any) => item.name === employee.name);
  }
  for (let key in target2) {
    if (target2[key].length) {
      for (let item of target2[key]) {
        if (item.unPublished) {
          flag = false;
          break;
        }
      }
    }
  }
  // console.log(flag, 'fff')
  return (
    <div className={classes.row}>
      <div className={classes.namePart}>
        <div>{employee?.name || shift}</div>
        {!flag && target.hours > 0 && <div>has unpublished changes</div>}
        {target.hours > 0 && <div>{target.hours}hours</div>}
        {target.hours > 0 && <div>${target.hours * 25}</div>}
      </div>
      <div className={classes.grid}>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
          return (
            <>
              <div className={classes.item}>
                {employee &&
                  employesList
                    .find((item: any) => item.name === employee.name)
                    [day].map((item: any , index:number) => {
                      
                      return (
                          <div key={index}>
                            {mapper[item.shiftName]}
                            {!item.unPublished && <DoneOutlinedIcon />}
                          </div>
                      );

                      // return <div>{mapper[item.shiftName]}
                      // {!item.unPublished && <DoneOutlinedIcon />}
                      // </div>;
                    })}
                {shift &&
                  shiftList
                    .find((item: any) => item.name === shift)
                    [day].map((item: any,index:number) => {
                      return (
                          <div key={index}>
                            {item.employeeName}
                            {!item.unPublished && <DoneOutlinedIcon />}
                          </div>
                      );
                      // return <div>{item.employeeName}
                      // {!item.unPublished && <DoneOutlinedIcon />}</div>;
                    })}

                <BasicPopover
                  isEmpolyee={!!employee}
                  popoverClicked={(shiftName: string) => {
                    popoverClick(day, shiftName, employee);
                  }}
                  popoverClicked2={(employeeName: string) => {
                    popoverClick(day, shift, employeeName);
                  }}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RosterRow;
