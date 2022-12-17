import {navbar,footer} from "../components/comp.js";
let nav= document.querySelector("#nav");
let foo= document.querySelector("#footer");
nav.innerHTML= navbar();
foo.innerHTML=footer();