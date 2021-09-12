import React from "react";
import { EventsList } from "../helpers/EventList";
import EventItem from "../components/EventItem";
import "../CSS/upcoming-events.css";

function UpcomingEvents() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Events</h1>
      <div className="menuList">
        {EventsList.map((menuItem, key) => {
          return (
            <EventItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UpcomingEvents;