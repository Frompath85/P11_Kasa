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
        {/* // je test si c'est un pragraphe ou une liste */
        
        Array.isArray(props.content) ? props.content.map((item, index) => {
          return (
              <p className="ListContent" key={index}>{item}</p>
          )
      }) :  <p className="CollapseContent">{props.content}</p>
        
        }
        
      </div>
    </article>
  );
}
