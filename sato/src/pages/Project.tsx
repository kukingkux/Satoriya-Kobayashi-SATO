import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";

import GuraEmu from "../assets/img/contents/Gura And Emu.png";
import InstaGura from "../assets/img/contents/Instagram Gawr Gura - Samsung Wallpaper 1.png";
import GfxGura from "../assets/img/contents/Instagram Gawr Gura GFX Case - Samsung Luxury Glass Case - SatoStudio 1.png";
import WebInterface from "../assets/img/contents/web_interface.png";
import MobileInterface from "../assets/img/contents/mobile_interface.png";
import AyameMockups from "../assets/img/contents/nakiri ayame mockups.png";
import "../static/myprojects.css";

const Project: Component = () => {
  const [pageName, setPageName] = createSignal("Settings");

  createEffect(() => setPageName("AboutMe"));

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

      <div class="container-fluid container-content">
        <div class="content d-flex flex-column justify-content-between">
          <div class="content-title">
            <h1 class="title">My latest project showcase</h1>
          </div>
          <div class="content-main d-flex flex-wrap justify-content-between">
            <div class="content-projects top">
              <img class="crop-img" src={GuraEmu} alt="Gura & Emu" />
            </div>
            <div class="content-projects top">
              <img
                src={InstaGura}
                alt="Instagram Gawr Gura - Samsung Wallpaper"
              />
            </div>
            <div class="content-projects top">
              <img
                src={GfxGura}
                alt="Instagram Gawr Gura GFX Case - Samsung Luxury Glass Case - SatoStudio "
              />
            </div>
            <div class="content-projects bot">
              <img src={WebInterface} alt="Web Interface" />
            </div>
            <div class="content-projects bot">
              <img src={MobileInterface} alt="Mobile Interface" />
            </div>
            <div class="content-projects bot">
              <img src={AyameMockups} alt="Nakiri Ayame Mockups" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
