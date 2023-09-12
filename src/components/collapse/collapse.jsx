import "./collapse.css";
import React from "react";
import { useState } from "react";
import ChevronUp from "../../assets/arraw_up.png"
import ChevronDown from "../../assets/arraw_down.png"

export default function Collapse(props) {
  const [isactive, setActive] = useState(false);

  return (
    <article className="Collapse">
      <div className="CollapseTitle" onClick={() => { setActive(!isactive); }} >
        <p>{props.title}</p>
        {
          isactive ?  <img src={ChevronUp} alt="chevron collapse" /> :  <img src={ChevronDown} alt="chevron collapse" />
        }
      </div>
      <div
        className={isactive ? "CollapseContentActive" : "CollapseContentHidden"}
      >
        <p className="CollapseContent">{props.content}</p>
      </div>
    </article>
  );
}
