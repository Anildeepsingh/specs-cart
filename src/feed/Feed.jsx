import React from 'react'
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import "./Feed.css";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];



function Feed() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Feeds</h1>
      <div className="Feed">
        <Carousel breakPoints={breakPoints}>
          <Card>One</Card>
          <Card>Two</Card>
          <Card>Three</Card>
          <Card>Four</Card>
          <Card>Five</Card>
          <Card>Six</Card>
          <Card>Seven</Card>
          <Card>Eight</Card>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Feed />, rootElement);

export default Feed