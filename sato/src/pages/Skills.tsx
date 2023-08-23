import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";

import Photoshop from "../assets/img/icons/Photoshop.svg";
import Figma from "../assets/img/icons/Figma.svg";
import UIUX from "../assets/img/icons/UIUX.svg";
import CorelDraw from "../assets/img/icons/Coreldraw.svg";
import Background from "../assets/img/Crystal Background By Sato-3.png";

import "../static/skills.css";

const Skills: Component = () => {
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
      <img
        src={Background}
        style={`max-width: 1160px;
           height: auto;
           position:absolute;
           right:0;
           bottom:0;
           z-index:-1 `}
      />
      <div class="container-fluid container-content">
        <div class="content d-flex flex-column justify-content-between">
          <div class="content-title">
            <h1 class="title">My skills</h1>
          </div>
          <div class="content-main ms-2">
            <div class="content-skills top row justify-content-between">
              <div class="card-wrapper ps col-auto">
                <div class="card-head d-flex justify-content-start align-items-center mt-3">
                  <img src={Photoshop} alt="Adobe Photoshop" />
                  <h1 class="card-title ms-4">Adobe Photoshop</h1>
                </div>
                <div class="card-content row mt-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. At risus viverra adipiscing at in tellus integer.
                    Rhoncus est pellentesque elit ullamcorper dignissim cras
                    tincidunt lobortis. Enim diam vulputate ut pharetra sit amet
                    aliquam id.
                  </p>
                </div>
              </div>
              <div class="card-wrapper figma col-auto">
                <div class="card-head d-flex justify-content-start align-items-center mt-3">
                  <img src={Figma} alt="Figma" />
                  <h1 class="card-title ms-4">Figma</h1>
                </div>
                <div class="card-content row mt-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. At risus viverra adipiscing at in tellus integer.
                    Rhoncus est pellentesque elit ullamcorper dignissim cras
                    tincidunt lobortis. Enim diam vulputate ut pharetra sit amet
                    aliquam id.
                  </p>
                </div>
              </div>
            </div>
            <div class="content-skills bot row justify-content-between mt-3">
              <div class="card-wrapper design col-auto">
                <div class="card-head d-flex justify-content-start align-items-center mt-3">
                  <img src={UIUX} alt="UI/UX Design" />
                  <h1 class="card-title ms-4">UI/UX Design</h1>
                </div>
                <div class="card-content row mt-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. At risus viverra adipiscing at in tellus integer.
                    Rhoncus est pellentesque elit ullamcorper dignissim cras
                    tincidunt lobortis. Enim diam vulputate ut pharetra sit amet
                    aliquam id.
                  </p>
                </div>
              </div>
              <div class="card-wrapper corel col-auto">
                <div class="card-head d-flex justify-content-start align-items-center mt-3">
                  <img src={CorelDraw} alt="CorelDraw" />
                  <h1 class="card-title ms-4">CorelDraw</h1>
                </div>
                <div class="card-content row mt-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. At risus viverra adipiscing at in tellus integer.
                    Rhoncus est pellentesque elit ullamcorper dignissim cras
                    tincidunt lobortis. Enim diam vulputate ut pharetra sit amet
                    aliquam id.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
