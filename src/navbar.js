import React from "react";

const NavBar = props => {
  const subMenus = ["For entrepreneurs", "For students", "For hobbyists"];
  console.log(props.menuItems);
  return (
    <div>
      {props.menuItems.map(el =>
        el !== "service" ? (
          <a>{el}</a>
        ) : (
          <div className="dropdown">
            <a className="dropbtn">{el}</a>
            <div className="dropdown-content">
              {subMenus.map(element => (
                <a href="#">{element}</a>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default NavBar;
