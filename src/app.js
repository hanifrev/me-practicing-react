import React from "react";
import { render } from "react-dom";
import Bands from "./Bands";
import TourDates from "./TourDates";
import OpethPic from "./OpethStuff";
import SomeAPI from "./API-Stuff";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Progressive Nations Tour"),
  //   React.createElement(Bands, {
  //     name: "Dream Theater",
  //     origin: "USA",
  //   }),
  //   React.createElement(Bands, {
  //     name: "Opeth",
  //     origin: "Sweden",
  //   }),
  //   React.createElement(Bands, {
  //     name: "Between The Buried and Me",
  //     origin: "USA",
  //   }),
  // ]);
  return (
    <div>
      <h1>Progressive Nations Tour</h1>
      <Bands name="Dream Theater" origin="USA" />
      <Bands name="Opeth" origin="Sweden" />
      <Bands name="Between The Buried and Me" origin="USA" />
      <OpethPic
        src="https://upload.wikimedia.org/wikipedia/en/e/e1/Opeth_MAYH.jpg"
        alt="---"
      />
      <TourDates date="TBA" vanue="TBA" city="TBA" />
      {/* <SomeAPI api="https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133609" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));

const Hongat = () => {
  return React.createElement(
    "web-com-test",
    null,
    React.createElement("h2", null, "systematic chaos")
  );
};

render(React.createElement(Hongat), document.getElementById("pale"));

// const Dates = () => {
//   return React.createElement("div", {}, [
//     React.createElement(TourDates, {
//       date: "TBA",
//       vanue: "Radio City Hall",
//       city: prompt("fill the city"),
//     }),
//   ]);
// };

// render(React.createElement(Dates), document.getElementById("dates"));

const OpethPics = () => {
  return (
    <div>
      <OpethPic
        src="https://townsquare.media/site/366/files/2019/07/Opeth2016d.jpg?w=980&q=75"
        alt="---"
      />
    </div>
  );
};

render(<OpethPics />, document.getElementById("opt"));
