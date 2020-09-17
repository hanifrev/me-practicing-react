import React from "react";
export default function Ticket({ btn }) {
  return (
    <div>
      <button className="button1">
        <h2>
          <a href="">RSVP</a>
        </h2>
        {btn}
      </button>
    </div>
  );
}
