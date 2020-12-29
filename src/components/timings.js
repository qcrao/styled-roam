import { html } from "htm/react";
import React from "react";
import tippy from "tippy.js";
import { getRelativeDuration } from "../utils/datetime";

export default function Timings() {
  const duration = getRelativeDuration();
  const [currentTime, setCurrentTime] = React.useState(duration[0]);
  const [marginTop, setMarginTop] = React.useState(duration[1]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const relative = getRelativeDuration();
      setCurrentTime(relative[0]);
      setMarginTop(relative[1]);
      tippy("[data-tippy-content]");
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return html`<div className="timings">
    <div
      className="timing-current"
      data-tippy-content=${currentTime}
      data-tippy-arrow="false"
      data-tippy-theme="light-border"
      style="${{ marginTop: marginTop }}"
    ></div>
    <div><span className="timing-whole"> 00:00 </span> AM</div>
    <div className="timing-half">00:30</div>
    <div><span className="timing-whole"> 01:00 </span> AM</div>
    <div className="timing-half">01:30</div>
    <div><span className="timing-whole"> 02:00 </span> AM</div>
    <div className="timing-half">02:30</div>
    <div><span className="timing-whole"> 03:00 </span> AM</div>
    <div className="timing-half">03:30</div>
    <div><span className="timing-whole"> 04:00 </span> AM</div>
    <div className="timing-half">04:30</div>
    <div><span className="timing-whole"> 05:00 </span> AM</div>
    <div className="timing-half">05:30</div>
    <div><span className="timing-whole"> 06:00 </span> AM</div>
    <div className="timing-half">06:30</div>
    <div><span className="timing-whole"> 07:00 </span> AM</div>
    <div className="timing-half">07:30</div>
    <div><span className="timing-whole"> 08:00 </span> AM</div>
    <div className="timing-half">08:30</div>
    <div><span className="timing-whole"> 09:00 </span> AM</div>
    <div className="timing-half">09:30</div>
    <div><span className="timing-whole"> 10:00 </span> AM</div>
    <div className="timing-half">10:30</div>
    <div><span className="timing-whole"> 11:00 </span> AM</div>
    <div className="timing-half">11:30</div>
    <div><span className="timing-whole"> 12:00 </span> AM</div>
    <div className="timing-half">12:30</div>
    <div><span className="timing-whole"> 13:00 </span> PM</div>
    <div className="timing-half">13:30</div>
    <div><span className="timing-whole"> 14:00 </span> PM</div>
    <div className="timing-half">14:30</div>
    <div><span className="timing-whole"> 15:00 </span> PM</div>
    <div className="timing-half">15:30</div>
    <div><span className="timing-whole"> 16:00 </span> PM</div>
    <div className="timing-half">16:30</div>
    <div><span className="timing-whole"> 17:00 </span> PM</div>
    <div className="timing-half">17:30</div>
    <div><span className="timing-whole"> 18:00 </span> PM</div>
    <div className="timing-half">18:30</div>
    <div><span className="timing-whole"> 19:00 </span> PM</div>
    <div className="timing-half">19:30</div>
    <div><span className="timing-whole"> 20:00 </span> PM</div>
    <div className="timing-half">20:30</div>
    <div><span className="timing-whole"> 21:00 </span> PM</div>
    <div className="timing-half">21:30</div>
    <div><span className="timing-whole"> 22:00 </span> PM</div>
    <div className="timing-half">22:30</div>
    <div><span className="timing-whole"> 23:00 </span> PM</div>
    <div className="timing-half">23:30</div>
  </div> `;
}
