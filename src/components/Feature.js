import React from 'react';
import { Menu } from "./Menu.js";

export default function Feature(props) {
  var { icon, title, text } = props;

  return (
    <div className="col-xs-6 col-md-3">
      <Menu />
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>
        {text}
      </p>
    </div>
  );
}