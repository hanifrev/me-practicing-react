import React from "react";
export default function TheHeader({ props }) {
  return (
    <div className="main-header">
      <h1>PROGRESSIVE NATION TOUR 2022</h1>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

// const nav = document.querySelector(".topnav");
// let navTop = nav.offsetTop;

// function fixedNav() {
//   if (window.scrollY >= navTop) {
//     nav.classList.add("fixed");
//   } else {
//     nav.classList.remove("fixed");
//   }
// }

// window.addEventListener("scroll", fixedNav);
