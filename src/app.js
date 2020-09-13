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
    <div className="main-container">
      {/* <h1>Progressive Nations Tour</h1> */}
      <Bands name="Dream Theater" origin="USA" />
      <OpethPic
        src="https://dreamtheater.net/wp-content/uploads/2018/12/48378205_10155716752697181_7965675337637953536_o.jpg"
        alt=""
      />

      <Bands name="Opeth" origin="Sweden" />
      <OpethPic
        src="https://townsquare.media/site/366/files/2019/07/Opeth2016d.jpg?w=980&q=75"
        alt="---"
      />

      <Bands name="Between The Buried and Me" origin="USA" />
      <OpethPic
        src="https://kulturhaeuser-production.s3.eu-central-1.amazonaws.com/uploads/artist/image/5728/Between_the_buried_and_me.jpg"
        alt=""
      />

      <Bands name="Sons of Apollo" origin="USA" />
      <OpethPic
        src="https://i0.wp.com/wphore.id/musikeras/wp-content/uploads/sites/6/2017/08/Sons-Of-Apollo-2017-edit2.png?fit=1200%2C649&quality=95&ssl=1"
        alt=""
      />

      <Bands name="Haken" origin="United Kingdom" />
      <OpethPic
        src="https://cdn3.whatculture.com/images/2018/09/073c97c17aca354d-600x338.jpg"
        alt=""
      />

      <Bands name="Plini" origin="Australia" />
      <OpethPic
        src="https://www.ultimate-guitar.com/static/article/news/2/87282_0_wide_ver1552046298.jpg"
        alt=""
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

// const OpethPics = () => {
//   return (
//     <div>
//       <OpethPic
//         src="https://townsquare.media/site/366/files/2019/07/Opeth2016d.jpg?w=980&q=75"
//         alt="---"
//       />
//     </div>
//   );
// };

// render(<OpethPics />, document.getElementById("opt"));
