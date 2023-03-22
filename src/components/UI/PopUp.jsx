import classes from "./PopUp.module.scss";
import ReactDOM from "react-dom";
import React from "react";

const PopUp = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes.overlay} onClick={props.onClose}>
          <div className={classes["pop-up"]}>{props.children}</div>
        </div>,

        document.getElementById("pop-up-root")
      )}
    </React.Fragment>
  );
};

export default PopUp;
