import type { Component } from "solid-js";
import { lazy, onMount } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";
import styles from "./App.module.css";
import Store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Logo from "./assets/img/logo/Logo.svg";
import Facebook from "./assets/img/icons/Facebook.svg";
import Instagram from "./assets/img/icons/Instagram.svg";
import Twitter from "./assets/img/icons/Twitter.svg";
import Discord from "./assets/img/icons/Discord.svg";

// import Home from "./pages/Home";
// import Users from "./pages/Users";

// lazy load componensts
const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Project"));
const Skills = lazy(() => import("./pages/Skills"));

const { localStorage } = window;

const App: Component = () => {
  const [store, setStore] = Store;

  onMount(() => {
    if (store.users.length === 0) {
      // save to localStorage
      const users = JSON.stringify(["user-1", "user-2", "user-3"]);
      localStorage.setItem("users", users);

      // save to Store (Global state)
      const usersStringified = localStorage.getItem("users");
      if (usersStringified !== null) {
        setStore("users", JSON.parse(usersStringified));
      }
    }
  });

  return (
    <>
      <div class="container sidebar d-flex flex-column">
        <div class="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul class="nav-list flex-grow-1">
          <li>
            <A href="/" activeClass={styles.active}>
              <span class="link-name">About me</span>
            </A>
          </li>
          <li>
            <A href="/project" activeClass={styles.active}>
              <span class="link-name">Project</span>
            </A>
          </li>
          <li>
            <A href="/skills" activeClass={styles.active}>
              <span class="link-name">Skills</span>
            </A>
          </li>
        </ul>

        <div class="social flex-shrink-1">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="X" />
          <img src={Discord} alt="Discord" />
        </div>
      </div>

      <Routes>
        <Route path="project" component={Project} />
        <Route path="skills" component={Skills} />
        <Route path="/" component={About} />
      </Routes>
    </>
  );
};

export default App;
