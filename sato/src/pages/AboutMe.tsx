import type { Component } from "solid-js";

import Sato from "../assets/img/sato.svg";
import Gura from "../assets/img/contents/gura.svg";
import Megu from "../assets/img/contents/megumin.svg";
import Towa from "../assets/img/contents/towa.svg";
import "../static/aboutme.css";

const AboutMe: Component = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
      />

      <div class="container-fluid content-container">
        <div class="content d-flex flex-column justify-content-evenly">
          <div class="content-title">
            <h3 class="sub-title">
              Hello, i'm <span>Sato!</span>
            </h3>
            <h1 class="title">
              <span>Satria</span> Nathan Pratama Putra.
            </h1>
            <h3 class="sub-title">I’m an UI/UX and GFX designer</h3>
          </div>
          <div class="content-main">
            <p class="content-text">
              I am a passionate UI/UX designer dedicated to creating intuitive
              and visually appealing digital experiences. With 6 months of
              experience in the field.
              <br />
              and also i’m a GFX designer with 2 years of experience in my home
              and school.
            </p>
            <div class="content-loc d-flex align-items-center  mb-4">
              <span class="material-symbols-rounded"> location_on </span>
              <p class="location-text">
                Limbangan kersana, Brebes, Central Java, 52264, Indonesia
              </p>
            </div>
            <div class="contact-me d-flex align-items-center justify-content-evenly">
              <i class="uil uil-whatsapp"></i>
              <p>Contact Me</p>
            </div>
          </div>
        </div>
        <div class="content bawah d-flex flex-column justify-content-evenly mt-4">
          <div class="content-title">
            <h2 class="title">My favorites character</h2>
          </div>
          <div class="content-charas d-flex justify-content-between">
            <div class="fig gura">
              <img src={Gura} alt="Gura" />
              <h2>Gawr Gura</h2>
            </div>
            <div class="fig megumin">
              <img src={Megu} alt="めぐみん" />
              <h2>めぐみん</h2>
            </div>
            <div class="fig towa">
              <img src={Towa} alt="常闇・トワ" />
              <h2>常闇・トワ</h2>
            </div>
          </div>
        </div>

        <div class="hero">
          <img src={Sato} alt="Hero" />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
