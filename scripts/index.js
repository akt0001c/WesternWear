import {navbar,footer} from "../components/comp.js";
let nav= document.querySelector("#nav");
let foo= document.querySelector("#footer");
nav.innerHTML= navbar();
foo.innerHTML=footer();
let baseurl= "http://localhost:3000";
let searchbtn= document.querySelector("#search-btn");

const geturlwomen=  ()=>{
    
  let url= `${baseurl}/women`
  localStorage.setItem("baseURL",url);
  window.location.href="man_page.html";
}

const geturlgirl= ()=>{
    let url= `${baseurl}/girl`;
    localStorage.setItem("baseURL",url);
    window.location.href="man_page.html";
}

const geturlboys= ()=>{
    let url= `${baseurl}/boy`;
    localStorage.setItem("baseURL",url);
    window.location.href="man_page.html";
};

const getNewArrivalwomen = ()=>{
    let url= `${baseurl}/women/?q=New`;
    localStorage.setItem("baseURL",url);
    window.location.href="man_page.html";
}

const getNewArrivalboy = ()=>{
    let url= `${baseurl}/boy/?q=New`;
    localStorage.setItem("baseURL",url);
    window.location.href="man_page.html";
}
const getNewArrivalgirl = ()=>{
    let url= `${baseurl}/girl/?q=New`;
    localStorage.setItem("baseURL",url);
    window.location.href="man_page.html";
}
let women_shop= document.querySelectorAll(".women-shop");
 for(let i=0;i<women_shop.length;i++)
{     women_shop[i].onclick= ()=>{
        geturlwomen();
        };
 }

let girl_shop=document.querySelectorAll(".girl-shop");
for(let j=0;j<girl_shop.length;j++)
{  girl_shop[j].onclick= ()=>{
    geturlgirl();
};
}

let boy_shop=document.querySelectorAll(".boy-shop")
for(let k=0;k<boy_shop.length;k++)
{boy_shop[k].onclick= ()=>{
  geturlboys();
}
}

let women_new_shop=document.querySelectorAll(".women-new-shop");
for(let a=0;a<women_new_shop.length;a++)
{women_new_shop[a].onclick= ()=>{
    getNewArrivalwomen();
}
}

let girl_new_shop=document.querySelectorAll(".girl-new-shop");
for(let b=0;b<girl_new_shop.length;b++)
{girl_new_shop[b].onclick= ()=>{
    getNewArrivalgirl();
};
}
let boy_new_shop=document.querySelectorAll(".boy-new-shop");
for(let c=0;c<boy_new_shop.length;c++)
{boy_new_shop[c].onclick= ()=>{
    getNewArrivalboy();
};
}
searchbtn.onclick= ()=>{
    let text= document.querySelector("#srch").value;
    let url= `${baseurl}/products?q=${text}`;
    localStorage.setItem("baseURL",url);
    window.location.href="man_page.html";
}
