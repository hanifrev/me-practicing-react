import React from "react";
import { render } from "react-dom";
import Bands from "./Bands";
import TourDates from "./TourDates";
import OpethPic from "./OpethStuff";
import SomeAPI from "./API-Stuff";
import TheHeader from "./main-header";
import Ticket from "./get-ticket";
import SearchParams from "./SearchParams";
import Counter from "./Counter";

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
      <div>
        <TheHeader />
      </div>
      <div className="main-container">
        <Bands
          name="Dream Theater"
          origin="USA"
          src="https://dreamtheater.net/wp-content/uploads/2018/12/48378205_10155716752697181_7965675337637953536_o.jpg"
          alt=""
        />

        <Bands
          name="Opeth"
          origin="Sweden"
          src="https://townsquare.media/site/366/files/2019/07/Opeth2016d.jpg?w=980&q=75"
          alt="---"
        />

        <Bands
          name="Between The Buried and Me"
          origin="USA"
          src="https://kulturhaeuser-production.s3.eu-central-1.amazonaws.com/uploads/artist/image/5728/Between_the_buried_and_me.jpg"
          alt=""
        />

        <Bands
          name="Sons of Apollo"
          origin="USA"
          src="https://i0.wp.com/wphore.id/musikeras/wp-content/uploads/sites/6/2017/08/Sons-Of-Apollo-2017-edit2.png?fit=1200%2C649&quality=95&ssl=1"
          alt=""
        />

        <Bands
          name="Haken"
          origin="United Kingdom"
          src="https://cdn3.whatculture.com/images/2018/09/073c97c17aca354d-600x338.jpg"
          alt=""
        />

        <Bands
          name="Plini"
          origin="Australia"
          src="https://www.ultimate-guitar.com/static/article/news/2/87282_0_wide_ver1552046298.jpg"
          alt=""
        />

        <Bands
          name="Fleshgod Apocalypse"
          origin="Italy"
          src="https://townsquare.media/site/366/files/2015/07/Fleshgod-Apocalypse-630x420.jpg?w=980&q=75"
          alt=""
        />

        <Bands
          name="Animals as Leaders"
          origin="USA"
          src="https://kys-cdn.s3.ap-southeast-1.amazonaws.com/kysadmn/wp-content/uploads/2016/11/18125745/14729137_10154640533186639_6881271050273957669_n.png"
          alt=""
        />

        <Bands
          name="Der Weg Einer Freiheit"
          origin="Germany"
          src="https://f4.bcbits.com/img/0012582151_10.jpg"
          alt=""
        />

        {/* <SomeAPI api="https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133609" /> */}
      </div>
      <div>
        <TourDates date="TBA" vanue="TBA" city="TBA" />
      </div>

      <div>
        <SearchParams />
        <Ticket />
        <Counter />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));

// const DateInfo = () => {
//   return (
//     <div>
//       <br></br>
//       <TourDates date="TBA" vanue="TBA" city="TBA" />
//     </div>
//   );
// };

// render(<DateInfo />, document.getElementById("dates"));

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
