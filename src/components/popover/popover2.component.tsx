import * as React from "react";
import Popover from "@mui/material/Popover";
import AddIcon from "@mui/icons-material/Add";
import classes from "@/styles/popover.module.css";
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

export default function BasicPopover({ popoverClicked, isEmpolyee , popoverClicked2 ,children }: any) {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const [isClicked, setIsClicked] = React.useState(false);

  const handleSelectShift = () => {
    setIsClicked(true);
  };

  const handleShiftAdded = (shiftName: string) => {
    popoverClicked(shiftName);
    handleClose();
    setIsClicked(false);
  };

  const handleEmployeeAdded = (employeeName: string) => {
    popoverClicked2(employeeName);
    handleClose();
    setIsClicked(false);
  };

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {/* <AddIcon
        sx={{ color: "rgb(147, 152, 155)", cursor: "pointer", fontSize: 21 }}
        onClick={handleClick}
      /> */}
      {
        React.cloneElement(children, {onClick:handleClick} /* 传递数据 */)
      }
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {isEmpolyee ? (
          <div className={classes.selector}>
            <div>
              <div
                className={
                  isClicked
                    ? `${classes.button} ${classes.shiftIsClicked}`
                    : `${classes.button}`
                }
              >
                <div>{123}</div>
              </div>
            </div>
            <div>
              <div className={classes.button}>Select Location</div>
            </div>
            <div>
              <div className={classes.button}>Select Task</div>
            </div>
          </div>
        ) : (
          <div className={classes.selector}>
            <div>
              <div
                className={
                  isClicked
                    ? `${classes.button} ${classes.shiftIsClicked}`
                    : `${classes.button}`
                }
              >
                <div>{456}</div>

              </div>
            </div>
            <div>
              <div className={classes.button}>Select Location</div>
            </div>
            <div>
              <div className={classes.button}>Select Task</div>
            </div>
          </div>
        )}
      </Popover>
    </div>
  );
}
