import "./collapse.css";
import React from "react";
import { useState } from "react";

export default function Collapse(props) {

  const ChevronUp = "./src/assets/arraw_up.png";
  const ChevronDown = "./src/assets/arraw_down.png";

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
