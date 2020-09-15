import React from "react";
export default function TourDates({ date, vanue, city }) {
  return (
    <div className="dates">
      <h3>Dates: {date}</h3>
      <h3>Vanue: {vanue}</h3>
      <h3>City: {city}</h3>
    </div>
  );
}
