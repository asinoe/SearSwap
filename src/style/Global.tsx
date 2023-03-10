import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "PT sans", sans-serif;
}
@font-face {
  font-family: fl1-shelly;
  src: url('./assets/css/fonts/fl1_shelly.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: fl2-bernhard;
  src: url('./assets/css/fonts/fl2_bernhard.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: fl3-palette;
  src: url('./assets/css/fonts/fl3_palette.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: fl4-gando;
  src: url('./assets/css/fonts/fl4_gando.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: fl5-finehand;
  src: url('./assets/css/fonts/fl5_finehand.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: fm1-palace;
  src: url('./assets/css/fonts/fm1_palace.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: fm2-times;
  src: url('./assets/css/fonts/fm2_times.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: fm3-times-kursive;
  src: url('./assets/css/fonts/fm3_times_kursiv.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
:root {
  --primary-text-color: #000;
  --primaryColor: #000;
  --mainWhite: #fff;
  --offWhite: #f7f7f7;
  --mainBlack: #222;
  --mainGrey: #ececec;
  --darkGrey: #f1f1f1;
  --mainTransition: all 0.3s linear;
  --mainSpacing: 1px;
  --lightShadow: .5px .5px 3px 0px rgba(0, 0, 0, 0.5);
  /* --darkShadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.7); */
  --darkShadow: .5px .5px 10px 0px rgba(0, 0, 0, .7);
  --element-radius: 3px;
  --element-padding: 7px 10px;
  --element-padding-sm: 2px 8px;
  --element-padding-lg: 16px 20px;
  --button-bg: linear-gradient(180deg,#fefbf4,#e8e4db);
  --button-text: #222;
  --button-border: #d3caba;
  --button-bg-hover: linear-gradient(#f1eee9, #ddd6ca);
  --button-text-hover: #222;
  --button-border-hover: #bd9f67;
  --button-active-bg: var(--button-primary-bg);
  --button-active-text: #fff;
  --button-active-border: var(--button-primary-bg);
  --button-active-bg-hover: var(--button-primary-bg-hover);
  --button-active-text-hover: #fff;
  --button-active-border-hover: var(--button-primary-bg-hover);
  --button-transparent-bg-hover: rgba(0,0,0,0.05);
  --button-transparent-border-hover: rgba(0,0,0,0.05);
  --gradient: linear-gradient(180deg,#706755,#9d9481);
  --dark-color: #706755;
  --card-background-color: #121b85;

}
/* globals */
body {
  padding-top: 100px;
  color: var(--mainBlack);
  background: #1433cb;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.4;
}
@media (max-width: 720px) {
  body { padding-top: 90px; }
}
h1 {
  font-size: 3em;
  line-height: 1;
  margin-bottom: 0.5em;
}
h2 {
  font-size: 2em;
  margin-bottom: 0.75em;
}
h3 {
  font-size: 1.5em;
  line-height: 1;
  margin-bottom: 1em;
}
h4 {
  font-size: 1.2em;
  line-height: 1.25;
  margin-bottom: 1.25em;
}
h5 {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 1.5em;
}
h6 {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 1.5em;
}

/* .btn-primary {
  display: inline-block;
  text-decoration: none;
  letter-spacing: var(--mainSpacing);
  color: var(--mainBlack);
  background: var(--primaryColor);
  padding: 0.4rem 0.9rem;
  border: 3px solid var(--primaryColor);
  transition: var(--mainTransition);
  text-transform: uppercase;
  cursor: pointer;
}
.btn-primary:hover {
  background: transparent;
  color: var(--primaryColor);
} */
.disable {
  pointer-events: none;
  opacity: 0.6;
}
.loading {
  text-transform: capitalize;
  text-align: center;
  margin-top: 3rem;
}
.error {
  text-align: center;
  text-transform: uppercase;
  margin: 2rem 0;
}
.empty-search {
  text-align: center;
  text-transform: capitalize;
  margin: 2rem 0;
  padding: 1rem;
  letter-spacing: var(--mainSpacing);
}
.svg-icon {
  display: inline-block;
  vertical-align: middle;
  line-height: 1em;
}
.form-control:focus {
  border-color: #0112E5;
  box-shadow: none;
}
button:focus { outline: none; }
/* end of globals */

/* loading icon */
.loading-spinner {
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  position: absolute;
  left: 50%;
  top: 50%;
  display: block;
}
.loading-spinner:after {
  content: " ";
  background: none;
  position: absolute;
  left: calc(50% - 25px);
  top: calc(30% - 25px);
  display: block;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border-bottom: 3px solid #0112E5;
  border-top: 3px solid #0112E5;
  border-radius: 50%;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  animation: cssload-spin 575ms linear infinite;
  -o-animation: cssload-spin 575ms infinite linear;
  -ms-animation: cssload-spin 575ms infinite linear;
  -webkit-animation: cssload-spin 575ms linear infinite;
  -moz-animation: cssload-spin 575ms infinite linear;
}
@keyframes cssload-spin {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
/* end of loading icon */

/* header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
.navbar {
  width: 100%;
  border-bottom: 1px solid #0540F2;
  display: flex;
  justify-content: space-between;
  padding: 10px auto;
}
.navbar img {
  width: 20px;
  margin-right: 5px;
}
.nav-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}
.nav-icon, .social-link {
  font-size: 1.5rem;
  color: var(--primary-text-color);
  margin: 0 0 0 2rem;
}
.social-link {
  font-size: 1.7rem;
  color: var(--offWhite);
  margin: 0 1rem 0 0;
  padding: 6px;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 50%;
}
.nav-links, .nav-mobile {
  height: 0;
  overflow: hidden;
  transition: var(--mainTransition);
  list-style-type: none;
  margin: 0 2rem;
}
.nav-mobile {
  height: auto;
  display: flex;
  margin: 0;
  float: right;
}
.nav-links a {
  display: block;
  text-decoration: none;
  padding: 1rem 0;
  color: var(--mainWhite);
  transition: var(--mainTransition);
  font-size: 1rem;
}
.navbar a { text-decoration: none; }
.navbar a > span {
  color: var(--primary-text-color);
  font-weight: 700;
  font-size: 20px;
  vertical-align: middle;
}
.nav-links a { color: var(--primary-text-color); }
.nav-links a:hover { color: var(--offWhite); }
.show-nav { height: 220px; }
@media screen and (min-width: 768px) {
  .navbar {
    padding: 0.5rem 2rem;
    justify-content: space-around;
  }
  .nav-btn { display: none; }
  .nav-center { max-width: 1170px; }
  .nav-mobile { display: none; }
  .nav-links {
    height: auto;
    display: flex;
    margin-left: 2rem;
  }
  .nav-links a {
    margin: 0 1rem;
    padding: 0.5rem 0;
  }
}
/* end of header */

/* container */
.container-fluid-without-background, .container-fluid {
  width: 100%;
  height: 100%;
  padding: 0 20px;
}
.container-fluid {
  height: 100%;
  /* background: url("./assets/img/background.jpg") no-repeat scroll center top transparent; */
}
.background {
  position: fixed;
  top: 0;
  left: 0;
  content: '';
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: url(./assets/img/map.png);
  background-size: cover;
  background-attachment: fixed;
  opacity: .4;
}
.projects {
  width: 80%;
  margin-left: 10%;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.project-title:not(:first-of-type) { margin-top: 150px; }
@media (max-width: 1200px) {
  .projects {
    width: 100%;
    margin-left: 0;
  }
}
@media (max-width: 768px) {
  .projects {
    margin-left: 0;
    grid-template-columns: 1fr;
  }
  .project-title { font-size: 24px; }
  .project-title:not(:first-of-type) { margin-top: 50px; }
}
/* Home page */
.hero { text-align: center; margin-top: 50px; }
.hero-title {
  font-size: 37px;
  line-height: 1.4;
  text-transform: uppercase;
}
.hero-description {
  color: #fff;
  font-size: 14px;
  width: '60%';
  margin: 'auto';
  margin-bottom: '1.5em';
}
.hero .buttons {
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto 2em auto;
}
.button-large {
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  letter-spacing: .1rem;
}
.button-small {
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 14px;
  color: var(--primary-text-color);
}
.button-small svg {
  font-size: 1.2rem;
  vertical-align: middle;
  padding-right: 5px;
}
.hero .buttons img {
  height: 20px;
  width: auto;
}
.hero .buttons h6 {
  color: white;
  margin: auto 0;
}
@media (max-width: 768px) {
  .container { width: 100%; }
  .hero-title { font-size: 28px; }
  .hero .buttons:first-of-type { margin-top: 50px; }
  .hero .buttons {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button-large, .button-small { margin-bottom: 20px; }
  .hero .buttons > h6 { margin: 20px 0; }
  .hero .buttons > a { margin: 10px 0; }
}
/* About Us component */
.aboutus, .system, .contact { padding-top: 100px; }
.aboutus img { width: 100%; height: auto; }
.rotation-container { margin: auto; }
.rotation, .contact-rotation {
  width: 400px;
  height: 400px;
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 576px) {
  .rotation-container { margin: 80px 0; }
  .aboutus img { width: 90%; height: auto; }
  .rotation {
    width: 235px;
    height: 235px;
  }
}
.rotation:before {
  position: absolute;
  content: '';
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: #0112E5;
  border-right-color: #0112E5;
  animation: cssload-spin 15s linear infinite 0s;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.rotation:after {
  position: absolute;
  content: '';
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: #0112E5;
  border-right-color: #0112E5;
  animation: cssload-spin 10s linear infinite 0s;
  top: -30px;
  left: -30px;
  bottom: -30px;
  right: -30px;
}
/* end of About Us component */
/* System component */
.round { margin-top: 50px; }
.round-title {
  font-size: 28px;
  line-height: 1.4;
  color: #000;
  font-weight: bolder;
}
.round .projects {
  width: 100%;
  margin-left: 0;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.round .round-card {
  margin: 1rem;
  text-align: center;
  background-color: var(--card-background-color);
  box-shadow: 1px 2px 20px rgb(0 0 0);
  border-radius: 20px;
  transform: all ease-in-out .3s;
  min-height: 340px; 
  padding: 20px;
}
.round .round-card-header {
  color: var(--primary-text-color);
  font-size: 28px;
  font-weight: bold;
}
.round .round-card hr { background: #E9F3FC; }
@media (max-width: 768px) {
  .round-title { font-size: 22px; }
  .round .projects { grid-template-columns: 1fr; }
}
.round img {
  width: 100%;
  height: auto;
}
/* end of System component */
/* Advisor component */
.advisor-card { min-height: 280px; }
.advisor-card img {
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;
}
.advisor-card .round-card-body svg { color: #000; margin-right: 1em; }
.advisor-card .round-card-body h5 { margin-bottom: .5rem; }
.advisor-card .round-card-body p {
  font-size: 14px;
  color: #000;
  margin-bottom: 0;
}
/* end of Advisor component */
/* Contact component */
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contact-list {
  list-style: none;
  position: relative;
  padding: 200px 0;
}
.contact-list li { margin-bottom: .1rem; }
.contact-list li a { color: white; font-size: 14px; letter-spacing: .1rem; }
.contact-rotation {
  width: 300px;
  height: 300px;
}
.contact-rotation:before {
  position: absolute;
  content: '';
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: white;
  border-right-color: white;
  animation: cssload-spin 15s linear infinite 0s;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.contact-rotation:after {
  position: absolute;
  content: '';
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: white;
  border-right-color: white;
  animation: cssload-spin 10s linear infinite 0s;
  top: -30px;
  left: -30px;
  bottom: -30px;
  right: -30px;
}
/* end of Contact component */
/* end of Home page */
/* custom card */
.custom-card {
  background-color: var(--card-background-color);
  box-shadow: 1px 2px 20px rgb(0 0 0);
  border-radius: 20px;
  margin: 2rem;
  transform: all ease-in-out .3s;
  min-height: 340px; 
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
}
.custom-card-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40%;
}
.custom-card-header img {
  width: 70px;
  height: auto;
  border-radius: 50%;
}
.custom-card-title {
  margin-left: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
}
.custom-card-title strong {
  font-size: 18px;
  color: white;
}
.social-links { margin-top: 5px; }
.status {
  margin-top: 10px;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 12px;
  color: var(--primary-text-color);
  background-color: rgb(240 185 19 / 26%);
  width: auto;
}
.custom-card-body {
  color: rgb(255 255 255);
  font-size: 13px;
  padding: 20px 0;
  height: 27%;
  display: flex;
  flex-direction: column;
}
.custom-card-footer {
  color: rgba(255, 255, 255, .9);
  font-size: 13px;
  /* padding: 20px 0; */
  height: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.custom-card-footer .information {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.custom-card-footer .custom-progress-bar {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.custom-card-footer .information span {
  color: var(--mainWhite);
  font-size: 18px;
  font-weight: 600;
}
.custom-card-footer .progress-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 13px;
}
.custom-progress-bar .progress {
  height: .5rem;
  margin: .2rem 0;
}
/* end of custom card */
/* Staking page */
.staking {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
/* Tabs component */
.tabs {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  border-bottom: 1px solid #0112E5;
}
.tabs .nav-link {
  padding: 10px 0;
  border: none;
  font-weight: bold;
  margin-right: 25px;
  box-shadow: none !important;
  outline: none !important;
  border-bottom: 4px transparent solid;
  transition: all ease-in-out .3s;
  background-color: transparent;
  color:#000;
  font-size: 16px;
}
.tabs .nav-link.active {
  border-bottom: 4px #0112E5 solid;
  color: #F0B90B !important;
}
.tabs-card .round-card {
  text-align: left;
  background-color: var(--card-background-color);
  box-shadow: 1px 2px 20px rgb(0 0 0);
  border-radius: 20px;
  transform: all ease-in-out .3s;
  min-height: 100px;
  padding: 10px;
}
.tabs-card .round-card-header {
  color: #0540F2;
  font-size: 14px;
  font-weight: bold;
}
.tabs-card .round-card hr { background: #f1f1f1; }
.tabs-card .round-card-body .hero-description {
  color: var(--primary-text-color);
  font-weight: bold;
}
/* end of Tabs component */
/* Wizard component */
.wizard, .checkpoints {
  margin-top: 50px;
  text-align: center;
  color: #000;
}
.wizard h2 { font-weight: bold; }
.wizard div:first-of-type {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.wizard div:first-of-type > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  letter-spacing: .03rem;
  text-align: center;
  width: 25%;
}
.wizard div > div.active .social-link { background-color: var(--primary-text-color); }
.wizard div:first-of-type .social-link {
  font-size: 2.5rem;
  padding: 10px;
  margin: 0;
  margin-bottom: 10px;
}
.wizard div:first-of-type hr {
  width: 8%;
  background: rgb(108 117 125);
  align-self: center;
}
.wizard div:first-of-type hr.active {
  width: 8%;
  background: var(--primary-text-color);
  align-self: center;
}
.wizard div.active span { color: var(--primary-text-color); }
@media (max-width: 576px) {
  .wizard div:first-of-type {
    align-items: flex-start;
  }
  .wizard span { font-size: 12px; }
}
/* end of Wizard component */


.p-select-card {
  position: relative;
  padding-right: 22px;
}

.p-select-card::after {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1.5px solid #0112E5;
  content: '';
  right: 15px;
  top: 15px;
  position: absolute;
  right: -3px;
}

.p-select-card::before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  content: '';
  background-color: #E9F3FC;
  right: 20px;
  top: 20px;
  position: absolute;
  right: 2px;
}

.p-select-card.selected::after {
  border: 1.5px solid #0112E5;
}

.p-select-card.selected::before {
  background-color: #E9F3FC;
}

.warning {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #E9F3FC;
  color: #f1b90c;
  box-shadow: 0px 10px rgb(0 0 0 / 5%);
  border-radius: 20px;
}

/* Checkpoints component */
.checkpoints {
  background-color: #0112E5;
  border-radius: 20px;
  box-shadow: 0px 10px rgb(0 0 0 / 5%);
  padding: 15px;
  min-height: 300px;
  margin-top: 10px;
}
.checkpoints h2 { font-size: 24px; }
.checkpoints > div:first-of-type {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
@media (max-width: 992px) {
  .checkpoints > div:first-of-type {
    grid-template-columns: repeat(1, 1fr);
  }
}
.checkpoints .round-card {
  margin: 1rem;
  text-align: left;
  background-color: var(--card-background-color);
  box-shadow: 1px 2px 20px rgb(0 0 0);
  border-radius: 20px;
  transform: all ease-in-out .3s;
  min-height: 130px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.checkpoints .round-card-header {
  color: white;
  font-size: 14px;
  font-weight: bold;
  height: 15%;
  margin-bottom: 5px;
}
.checkpoints .round-card hr { background: #0112E5; }
.checkpoints .round-card .round-card-body {
  color: #000;
  font-size: 14px;
  height: 85%;
}
.checkpoints .round-card .round-card-footer { height: 10% }
@media (max-width: 576px) {
  .checkpoints h2 { font-size: 20px; }
  .checkpoints p { font-size: 14px; margin: 0; }
}
/* end of Checkpoints component */
/* end of Staking page */
/* end of container */

/* footer */
.footer {
  background: linear-gradient(180deg, #4c4a44, #383731);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  color: white;
  font-size: 14px;
}
.footer > div {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  color: white;
  font-size: 14px;
}
.footer a { color: white; }
.footer > div > div > a:first-child {
  margin-right: 20px;
}
@media (max-width: 1200px) { .footer { padding: 0 30px; } }
@media (max-width: 768px) { .footer { display: none; } }
/* end of footer */


/* card */
.green-card {
  background-color: var(--card-background-color);
  box-shadow: 1px 2px 20px rgb(0 0 0);
  border-radius: 20px;
  margin: 2rem;
  transform: all ease-in-out .3s;
  min-height: 340px; 
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
}
.green-card-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40%;
}
.green-card-header img {
  width: 70px;
  height: auto;
}
.green-card-title {
  margin-left: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.green-card-title > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}
.green-card strong {
  font-size: 26px;
  color: #000;
  text-transform: uppercase;
}
.green-card-title a {
  font-size: 13px;
  color: #000;
  text-decoration: none;
}
.green-card .social-links { margin-top: 5px; }
.green-card .social-link {
  font-size: 1.7rem;
  color: var(--offWhite);
  margin: 0 0 0 .2rem;
  padding: 6px;
  background-color: #E9F3FC;
  border-radius: 50%;
}
.green-card-body {
  color:#000;
  font-size: 13px;
  padding: 20px 0;
  height: 27%;
  display: flex;
  flex-direction: column;
}
.green-card-body h4 {
  color: #000;
}
.green-card-body img {
  height: 100px;
  width: auto;
}
.button-large {
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  letter-spacing: .1rem;
  line-height: 1.6rem;
}
.button-small {
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 14px;
  color: #000;
}
.green-card-footer {
  color: #000;
  font-size: 13px;
  height: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.green-card-footer input.form-control {
  height: calc(20px + 1.6rem);
  width: 60%;
  font-size: 20px;
}
/* end of card */
/* custom switch */
.custom-switch {
  background-color: #0112E5;
  border-radius: 16px;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
}
.custom-switch span {
  background: transparent;
  padding: 10px 20px;
  width: 50%;
  text-align: center;
  font-weight: bolder;
}
.custom-switch span.active {
  /* box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset; */
  background-color: #E9F3FC;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  border-radius: 16px;
  color: white;
}
/* end of custom switch */
`

export default GlobalStyle
