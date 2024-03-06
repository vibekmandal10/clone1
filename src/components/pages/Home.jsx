import React from "react";
import "./Home.css";
import hero_image from "../../images/hero_image.jpg";
import box1 from "../../images/box1_image.jpg"
import box2 from "../../images/box2_image.jpg"
import box3 from "../../images/box3_image.jpg"
import box4 from "../../images/box4_image.jpg"
import box5 from "../../images/box5_image.jpg"
import box6 from "../../images/box6_image.jpg"
import box7 from "../../images/box7_image.jpg"
import box8 from "../../images/box8_image.jpg"
import Card from "../Card";
const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <img src={hero_image} alt="" />
        <div className="heading">
          <p>
            You are on amazon.com. You can also shop on Amazon India for
            millions of products with fast local delivery. <a href="#">Click here to go to
            amazon.in</a>
          </p>
        </div>
        <div className="card-container">
        <div className="row-container">
            <Card img={box1} url="/cloths" />
            <Card img={box2} url="/tooth-brush"/>
            <Card img={box3} url="/table" />
            <Card img={box4} url="/mobile"/>
            
        </div>
        
        <div className="row-container">
            
            <Card img={box5} url="/makeup"/>
            <Card img={box6} url="/dogs"/>
            <Card img={box7} url="/toys"/>
            <Card img={box8} url="/womens"/>

            
        </div>
        
        </div>
       
        
        
      </div>
    </div>
  );
};

export default Home;
