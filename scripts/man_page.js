const baseURL1 = localStorage.getItem("baseURL");
const baseURL = "http://localhost:3000";

const baseURL_men = "http://localhost:3000/men";
const baseURL_women = "http://localhost:3000/women";
const baseURL_boys = "http://localhost:3000/Boy";
const baseURL_girls = "http://localhost:3000/girl";

window.onload = async ()=> {
    let res = await fetch(baseURL1);
    let data = await res.json();
    console.log(data)
    appendData(data);
}

// Logic For dropdown content of poster

let dropdown_btn = document.querySelector(".dropbtn");
dropdown_btn.addEventListener("click", ()=> {
    dropdown_content()
});

function dropdown_content (){
    //console.log("insode the div")
    let options = document.querySelector(".dropdown-content");

    if(options.style.display == "block"){
        options.style.display = "none";
    }else {
        options.style.display = "block";
    }
}
// DropDown of featured button-------------
let dropdown_btn2 = document.querySelector("#Featured_btn1");
dropdown_btn2.addEventListener("click", ()=> {
    dropdown_content1()
});

function dropdown_content1(){
    console.log("insode the div")
    let options = document.querySelector("#myDropdown1");

    if(options.style.display == "block"){
        options.style.display = "none";
    }else {
        options.style.display = "block";
    }  
}

// Show filter Display (none / block)
let show_filter_btn = document.getElementById("dark_dropdopwn_filterbtn1");


show_filter_btn.addEventListener("click", ()=> {
    showing_filters()
});
 function showing_filters(){
    let category_section = document.getElementById("category_section");

    if(category_section.style.display == "block"){
        category_section.style.display = "none";
        widthOfContainerLess();
    }else {
        category_section.style.display = "block";
        widthOfContainerLess();
    }
 }


 // All diffrent filters position (relative/absolute)

let category = document.getElementById("category_div");
category.addEventListener("click", hide_Filter_category);

let discount = document.querySelector("#discount_div");
discount.addEventListener("click",hide_Filter_discount);

let size = document.getElementById("size_Text_div");
size.addEventListener("click",hide_Filter_size);

let color = document.getElementById("color_text_div");
color.addEventListener("click",hide_Filter_color);

let pattern = document.getElementById("pattern_text_div");
pattern.addEventListener("click",hide_Filter_pattern);

let trending = document.getElementById("trending_text_div");
trending.addEventListener("click",hide_Filter_trending);

let brand = document.getElementById("brand_text_div");
brand.addEventListener("click",hide_Filter_brand);

let re_imagined = document.getElementById("reImagined_text_div");
re_imagined.addEventListener("click",hide_Filter_Reimagined);



function hide_Filter_category(){
    console.log("helo")

    let main_section = document.getElementById("dont_show_category");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
    

}
function hide_Filter_discount(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_discount");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute";
    }
   
}
function hide_Filter_size(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_size");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
   
}
function hide_Filter_color(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_color");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
}
function hide_Filter_pattern(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_pattern");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
}
function hide_Filter_trending(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_trending");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
        main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute";
    }
}
function hide_Filter_brand(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_brand");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
}
function hide_Filter_Reimagined(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_re-imagined");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
}
// CONTAINER & CARDS

let container_AllProducts = document.getElementById("container_AllProducts");

function widthOfContainerLess(){
    
    if(category_section.style.display == "block"){
        let body_div_after_poster = document.getElementById("body_div_after-poster");
        body_div_after_poster.style.display = "flex";
        // body_div_after_poster.style.border = "1px solid gold";
        container_AllProducts.style.position = "absolute";
        container_AllProducts.style.marginTop = "20px";
        container_AllProducts.style.width = "77%";
        container_AllProducts.style.top = "520px";
        container_AllProducts.style.left = "280px";
    } else{
        let body_div_after_poster = document.getElementById("body_div_after-poster");
        body_div_after_poster.style.display = "block";
        container_AllProducts.style.position = "relative";
        // container_AllProducts.style.marginTop = "20px";
        container_AllProducts.style.width = "97%";
        container_AllProducts.style.top = "0px";
        container_AllProducts.style.left = "0px";
        container_AllProducts.style.marginLeft = "1%";
        container_AllProducts.style.padding = "20px 10px 20px 10px";
    }
}


// -------------------------------------------------------
// Dropdown functionality
let poster_dropdown = document.getElementById("poster_dropdown_default");
let men_dropdown =  document.getElementById("for_men_poster");
let women_dropdown =  document.getElementById("for_her_poster");
let boys_dropdown =  document.getElementById("for_boys_poster");
let girls_dropdown =  document.getElementById("for_girls_poster");
let others_dropdown =  document.getElementById("for_others_poster");

// dropdown MEN SECTION
men_dropdown.onclick = async ()=>{
    poster_dropdown.innerHTML = `For men <span><i id="dropdown_arrow" class="fa-solid fa-angle-down"></i></span>`;

    let res = await fetch(`${baseURL}/men`);
    let data = await res.json();
    console.log(data);
    appendData(data);
}

// dropdown WOMEN SECTION
women_dropdown.onclick = async ()=>{
    //console.log("insde womenr")
    poster_dropdown.innerHTML = `For women <span><i id="dropdown_arrow" class="fa-solid fa-angle-down"></i></span>`;

    let res = await fetch(`${baseURL}/women`);
    let data = await res.json();
    //console.log(data)
    appendData(data)
}

// dropdown BOYS SECTION
boys_dropdown.onclick = async ()=>{
    poster_dropdown.innerHTML = `For boys <span><i id="dropdown_arrow" class="fa-solid fa-angle-down"></i></span>`;
    let res = await fetch(`${baseURL}/Boy`);
    let data = await res.json();
    console.log(data)
    appendData(data)
}

// dropdown GIRLS SECTION
girls_dropdown.onclick = async ()=>{
    poster_dropdown.innerHTML = `For girls <span><i id="dropdown_arrow" class="fa-solid fa-angle-down"></i></span>`;
    let res = await fetch(`${baseURL}/girl`);
    let data = await res.json();
    console.log(data)
    appendData(data)
}


// APPENDING FUNCTIONALITY

let container = document.getElementById("container_divison");
    function appendData(data){
        
        container.innerHTML = "";
        //console.log(data)
        data.forEach(function(el,index) {

            let section = document.createElement("section");
            section.setAttribute("class","card_individual_section");
            section.onclick = ()=>{
                description_page_data(el)
            }

            let image = document.createElement("img");
            image.src = el.image;

            let tag  = document.createElement("p");
            tag.innerText = el.tag;
            tag.style.fontWeight = "bold";
            tag.style.color = "rgb(219, 49, 49)";

            let name  = document.createElement("p");
            name.innerText = el.product_name;
            name.style.fontWeight = "bold";
            name.style.fontSize = "20px";
            name.style.color = "rgb(77, 74, 74)";

            let cross_price = document.createElement("del");
            cross_price.innerText = `INR ${el.cross_price}`;
            cross_price.style.color = "black";
            cross_price.style.fontWeight = "bold";

            let price =  document.createElement("p");
            price.innerText = `INR ${el.price}`;
            price.style.color = "rgbrgb(77, 74, 74)";
            price.style.fontWeight = "bold";
            price.style.fontSize = "20px";

            let btn = document.createElement("button");
            btn.innerText = "Quick Buy";

            section.append(image,tag,name,cross_price,price,btn);
            container.append(section);
        });
}

// function going to description of every div;

function description_page_data(el){
    console.log(el)
    let obj_description={
        image: el.image,
        category: el.category,
        tag: el.tag,
        product_name: el.product_name,
        cross_price: el.cross_price,
        price: el.price,
        discount: el.discount
        }
    
    localStorage.setItem("description",JSON.stringify(obj_description));

    window.location.href = "./description.html";
}


// SORTING -------------------------------------------------
// Sorting by (Featured button) 

let best_seller_btn = document.getElementById("best_seller_btn");
best_seller_btn.onclick = async ()=> {

    let poster_dropdown_default = document.getElementById("poster_dropdown_default");
    let category_selected = poster_dropdown_default.innerText;
    console.log(category_selected);

    if(category_selected.includes("women")){
        
        let res = await fetch(`${baseURL}/women?tag=BEST SELLER`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("men")){
        let res = await fetch(`${baseURL}/men?tag=BEST SELLER`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("boys")){
            
        let res = await fetch(`${baseURL}/Boy?tag=BEST SELLER`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("girls")){
            
        let res = await fetch(`${baseURL}/girl?tag=BEST SELLER`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);
    }

}

// Sorting by (Featured button) ---> "New Arrivals"

let top_rated_btn = document.getElementById("top_rated_btn");
top_rated_btn.onclick = async ()=> {

    let poster_dropdown_default = document.getElementById("poster_dropdown_default");
    let category_selected = poster_dropdown_default.innerText;
    console.log(category_selected);

    if(category_selected.includes("women")){
        
        let res = await fetch(`${baseURL}/women?tag=New Arival`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("men")){
        
        let res = await fetch(`${baseURL}/men?tag=New Arival`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("boys")){
            
        let res = await fetch(`${baseURL}/Boy?tag=New Arival`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("girls")){
            
        let res = await fetch(`${baseURL}/girl?tag=New Arival`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);
    }

}

// Featured Button near filter button

// Best seller
let bestSeller = document.getElementById("BestSeller_btn_in_container")
bestSeller.onclick = async ()=> {

    let poster_dropdown_default = document.getElementById("poster_dropdown_default");
    let category_selected = poster_dropdown_default.innerText;
    console.log(category_selected);

    if(category_selected.includes("women")){
        
        let res = await fetch(`${baseURL}/women?tag=BEST SELLER`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("men")){
         "Men";
        let res = await fetch(`${baseURL}/men?tag=BEST SELLER`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("boys")){
            
        let res = await fetch(`${baseURL}/Boy?tag=BEST SELLER`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("girls")){
            
        let res = await fetch(`${baseURL}/girl?tag=BEST SELLER`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);
    }

}

// New arrivals
let newArrivals = document.getElementById("NewArrivals_btn_in_container");
newArrivals.onclick = async ()=> {

    let poster_dropdown_default = document.getElementById("poster_dropdown_default");
    let category_selected = poster_dropdown_default.innerText;
    console.log(category_selected);

    if(category_selected.includes("women")){
        
        let res = await fetch(`${baseURL}/women?tag=New Arival`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("men")){
        
        let res = await fetch(`${baseURL}/men?tag=New Arival`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("boys")){
            
        let res = await fetch(`${baseURL}/Boy?tag=New Arival`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("girls")){
            
        let res = await fetch(`${baseURL}/girl?tag=New Arival`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);
    }

}

// Price Low to high
let price_LtH = document.getElementById("price_LtH"); 
let price_HtL = document.getElementById("price_HtL"); 

price_LtH.onclick = async ()=> {

    let poster_dropdown_default = document.getElementById("poster_dropdown_default");
    let category_selected = poster_dropdown_default.innerText;
    console.log(category_selected);

    if(category_selected.includes("women")){
        
        let res = await fetch(`${baseURL}/women?_sort=price&_order=asc`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("men")){
        
        let res = await fetch(`${baseURL}/men?_sort=price&_order=asc`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("boys")){
            
        let res = await fetch(`${baseURL}/Boy?_sort=price&_order=asc`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("girls")){
            
        let res = await fetch(`${baseURL}/girl?_sort=price&_order=asc`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);
    }
}

// Price High to Low

price_HtL.onclick = async ()=> {

    let poster_dropdown_default = document.getElementById("poster_dropdown_default");
    let category_selected = poster_dropdown_default.innerText;
    console.log(category_selected);

    if(category_selected.includes("women")){
        
        let res = await fetch(`${baseURL}/women?_sort=price&_order=desc`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("men")){
        
        let res = await fetch(`${baseURL}/men?_sort=price&_order=desc`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("boys")){
            
        let res = await fetch(`${baseURL}/Boy?_sort=price&_order=desc`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);

    } else if(category_selected.includes("girls")){
            
        let res = await fetch(`${baseURL}/girl?_sort=price&_order=desc`);
        let data = await res.json();
        // let actual_data = data;
        console.log(data);
        appendData(data);
    }
}

// Done with all the buttons now only filter section is remaining

// filter section with Category & discounts only

let category_label_input = document.querySelectorAll(".category_label_input");

for(let filters of category_label_input){
    filters.onchange = (event)=> {
        if(filters.checked){
            let item_id_filter = event.target.id;
            //console.log(item_id_filter)
            filters_function(item_id_filter);
        }
    }
}

// filters_function

function filters_function(item_id){
    console.log(`${item_id}`)
    let item_text = document.getElementById(`${item_id}`).value;
    console.log(item_text)
    let gender_catch = document.getElementById("poster_dropdown_default").innerText
    console.log(gender_catch);

    if(gender_catch.includes("girls")){
        req_filter_function(item_text,baseURL_girls);
    } else if(gender_catch.includes("women")){
        req_filter_function(item_text,baseURL_women);
    } else if(gender_catch.includes("men")){
        req_filter_function(item_text,baseURL_men);
    } else if(gender_catch.includes("boys")){
        req_filter_function(item_text,baseURL_boys);
    } 
}

async function req_filter_function(checked_filter,url){
    console.log(checked_filter)
    if(checked_filter == "denim" || checked_filter == "pant" || checked_filter == "sweater" || checked_filter == "shirt"){
        let res = await fetch(`${url}?filter=${checked_filter}`);
        let data = await res.json();
        console.log(data);
        appendData(data);
    } 
    else if(checked_filter == "?discount_gte=10&discount_lte=30" || checked_filter == "?discount_gte=30&discount_lte=50" ||checked_filter == "?discount_gte=51"){
        
        let res = await fetch(`${url}${checked_filter}`);
        let data = await res.json();
        console.log(data);
        appendData(data);
    }
}






